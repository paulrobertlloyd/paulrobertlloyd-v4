const urls = new Set([
  "/2026/123/a1/great_north/",
  "/2026/054/a1/ski-school/",
  "/2025/292/a1/paris_lyon_sitges_barcelona/",
  "/2023/236/a1/milan_como_zurich/",
  "/2023/106/a1/birmingham/",
  "/2019/036/a1/look_around_you/",
]);

export const highlights = (collection) =>
  collection
    .getAll()
    .filter((item) => urls.has(item.page.url))
    .toReversed();
