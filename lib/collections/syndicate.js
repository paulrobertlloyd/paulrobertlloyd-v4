// Scheduled
// =========
// 11ty doesn’t support scheduled posts, so need to remove
// posts with a future date from this collection
// See: https://github.com/11ty/eleventy/issues/26
export default (collection) =>
  collection
    .getAllSorted()
    .filter((item) => item.date <= new Date())
    .filter((item) => item.data.syndicate === true)
    .reverse();
