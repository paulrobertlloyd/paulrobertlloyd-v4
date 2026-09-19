import { indexed, indexedWithSlug, underPath } from "./utils/permalink.js";

export const postTypes = {
  article: {
    permalink: indexedWithSlug,
    prefix: "a",
    syndicate: true,
  },
  bookmark: {
    permalink: indexedWithSlug,
    prefix: "b",
    syndicate: true,
  },
  collection: {
    permalink: underPath("collections"),
    visibility: "unlisted",
  },
  comments: {
    prefix: "c",
    permalink: indexedWithSlug,
    vocabulary: "feed",
    visibility: "unlisted",
  },
  drawing: {
    prefix: "d",
    permalink: indexed,
    syndicate: true,
  },
  event: {
    permalink: indexedWithSlug,
    prefix: "e",
    vocabulary: "event",
  },
  itinerary: {
    prefix: "i",
    permalink: indexedWithSlug,
    vocabulary: "event",
  },
  jam: {
    prefix: "j",
    permalink: indexed,
    syndicate: true,
  },
  note: {
    prefix: "n",
    permalink: indexed,
    syndicate: true,
  },
  photo: {
    prefix: "p",
    permalink: indexed,
    syndicate: true,
  },
  presentation: {
    prefix: "s",
    permalink: indexedWithSlug,
    syndicate: true,
  },
  project: {
    permalink: underPath("projects"),
    prefix: "w",
    syndicate: true,
  },
  reply: {
    prefix: "r",
    permalink: indexed,
    syndicate: true,
    visibility: "unlisted",
  },
  trip: {
    prefix: "t",
    permalink: indexed,
    vocabulary: "event",
    visibility: "unlisted",
  },
};
