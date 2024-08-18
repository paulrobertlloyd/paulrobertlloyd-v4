import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const getFile = async (filePath) => {
  filePath = fileURLToPath(path.join(import.meta.url, filePath));

  return await readFile(filePath, { encoding: "utf8" });
};

export default class ServiceWorker {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "serviceworker.js",
    };
  }

  async render({ collections, navigation }) {
    const offlinePages = [];

    for (const item of navigation.primary) {
      offlinePages.push(item.url);
    }

    for (const item of navigation.secondary) {
      if (item.rel !== "external") {
        offlinePages.push(item.url);
      }
    }

    for (const item of collections.highlights) {
      offlinePages.push(item.url);
    }

    try {
      let offlineImage = await getFile("../../assets/vectors/placeholder.svg");

      let serviceworker = await getFile("../../../lib/serviceworker.js");
      serviceworker = serviceworker
        .replace("APP_VERSION", Date.now())
        .replace("APP_OFFLINE_IMAGE", offlineImage)
        .replace("APP_OFFLINE_PAGES", offlinePages);
      return serviceworker;
    } catch (error) {
      console.error(error.message);
    }
  }
}
