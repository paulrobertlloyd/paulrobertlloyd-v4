const offlineImage = `APP_OFFLINE_IMAGE`;
const offlinePages = `APP_OFFLINE_PAGES`.split(",");
const offlinePage = "/offline/";
const assetCacheName = `assets-APP_VERSION`;
const imageCacheName = "images";
const pagesCacheName = "pages";
const maxPages = 50; // Maximum number of pages to cache
const maxImages = 100; // Maximum number of images to cache
const timeout = 5000; // Number of milliseconds before timing out
const cacheList = new Set([assetCacheName, imageCacheName, pagesCacheName]);

/**
 * Update asset cache
 * @returns {Promise<Cache>} - Updated asset cache
 */
async function updateAssetCache() {
  try {
    const assetCache = await caches.open(assetCacheName);

    // These items won’t block the installation of the service worker
    assetCache.addAll(offlinePages);

    // These items must be cached for service worker to complete installation
    await assetCache.addAll([
      "/assets/icons/icon-512-any.png",
      "/assets/vectors/icons.svg",
      "/assets/vectors/shadow.svg",
      "/media/404.svg",
      "/app.css",
      offlinePage,
    ]);

    return assetCache;
  } catch (error) {
    console.error("Error updating asset cache", error);
  }
}

/**
 * Cache the page(s) that initiate the service worker
 * @returns {Promise<Cache>} - Updated page cache
 */
async function cacheClients() {
  const pages = [];
  try {
    const allClients = await clients.matchAll({ includeUncontrolled: true });

    for (const client of allClients) {
      pages.push(client.url);
    }

    const pagesCache = await caches.open(pagesCacheName);
    await pagesCache.addAll(pages);

    return pagesCache;
  } catch (error) {
    console.error("Error updating client cache", error);
  }
}

/**
 * Remove caches whose name is no longer valid
 */
async function clearOldCaches() {
  try {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter((key) => !cacheList.has(key))
        .map((key) => caches.delete(key)),
    );
  } catch (error) {
    console.error("Error clearing old caches", error);
  }
}

/**
 * Trim cache
 * @param {string} cacheName - Name of cache
 * @param {number} maxItems - Maximum number of items to keep in cache
 */
async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();

    if (keys.length > maxItems) {
      await cache.delete(keys[0]);
      await trimCache(cacheName, maxItems);
    }
  } catch (error) {
    console.error(`Error trimming ${cacheName} cache`, error);
  }
}

self.addEventListener("install", async (event) => {
  event.waitUntil(
    (async () => {
      await updateAssetCache();
      await cacheClients();
      self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", async (event) => {
  event.waitUntil(
    (async () => {
      await clearOldCaches();
      await clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data.command == "trimCaches") {
    trimCache(pagesCacheName, maxPages);
    trimCache(imageCacheName, maxImages);
  }
});

if (registration.navigationPreload) {
  self.addEventListener("activate", (event) => {
    event.waitUntil(registration.navigationPreload.enable());
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Ignore non-GET requests
  if (request.method !== "GET") {
    return;
  }

  const retrieveFromCache = caches.match(request);

  // For HTML requests, try network, fall back to cache, else show offline page
  if (
    request.mode === "navigate" ||
    request.headers.get("Accept").includes("text/html")
  ) {
    event.respondWith(
      (async () => {
        // CHECK CACHE
        const timer = setTimeout(async () => {
          const responseFromCache = await retrieveFromCache;
          if (responseFromCache) {
            return responseFromCache;
          }
        }, timeout);

        try {
          const preloadResponse = await Promise.resolve(event.preloadResponse);
          const responseFromPreloadOrFetch =
            preloadResponse || (await fetch(request));

          // NETWORK
          // Save a copy of page to pages cache
          clearTimeout(timer);
          const copy = responseFromPreloadOrFetch.clone();
          const pagesCache = await caches.open(pagesCacheName);
          await pagesCache.put(request, copy);

          return responseFromPreloadOrFetch;
        } catch (error) {
          console.error(error, request);

          // CACHE or OFFLINE PAGE
          clearTimeout(timer);
          const responseFromCache = await retrieveFromCache;
          return responseFromCache || caches.match(offlinePage);
        }
      })(),
    );

    return;
  }

  // For non-HTML requests, look in cache first, fall back to network
  event.respondWith(
    (async () => {
      try {
        const responseFromCache = await retrieveFromCache;

        if (responseFromCache) {
          // CACHE
          return responseFromCache;
        } else {
          const responseFromFetch = await fetch(request);

          // NETWORK
          // If request is for an image, save a copy to images cache
          if (/\.(jpe?g|png|gif|svg|webp)/.test(request.url)) {
            const copy = responseFromFetch.clone();
            const imagesCache = await caches.open(imageCacheName);
            await imagesCache.put(request, copy);
          }

          return responseFromFetch;
        }
      } catch (error) {
        console.error(error);

        // OFFLINE IMAGE
        if (/\.(jpe?g|png|gif|svg|webp)/.test(request.url)) {
          return new Response(offlineImage, {
            headers: {
              "Content-Type": "image/svg+xml",
              "Cache-Control": "no-store",
            },
          });
        }
      }
    })(),
  );
});
