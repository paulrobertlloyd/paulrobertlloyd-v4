const urls = new Set([
  "/2023/290/a1/south_downs/",
  "/2023/236/a1/milan_como_zurich/",
  "/2023/157/a1/vision_pro/",
  "/2023/106/a1/birmingham/",
  "/2019/036/a1/look_around_you/",
  "/2015/210/a1/londons_olympic_stadium/",
]);

export const highlights = (collection) =>
  collection
    .getAll()
    .filter((item) => urls.has(item.page.url))
    .reverse();
