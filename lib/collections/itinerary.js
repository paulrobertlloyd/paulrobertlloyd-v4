export const itinerary = (collection) =>
  collection.getFilteredByGlob("src/content/itineraries/*.markdown").reverse();
