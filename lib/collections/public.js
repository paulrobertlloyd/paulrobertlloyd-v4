import { getPublicItems } from "../utils/collection.js";

export const publicVisibility = (collection) =>
  getPublicItems(collection).toReversed();
