import slugify from "@sindresorhus/slugify";
import { getPermalink } from "../utils/page.js";
import getEventData from "../events.js";

const cache = { events: undefined };

/**
 * Build the events collection
 * @returns {Promise<Array>} Events, most recent first
 */
const getEvents = async () => {
  const data = await getEventData();

  return data
    .map((item) => {
      const permalink = `${getPermalink(item)}/${slugify(item.title, { separator: "_" })}/`;

      return { data: item, url: `/${permalink}`, permalink };
    })
    .toSorted((a, b) => new Date(b.data.start) - new Date(a.data.start));
};

/**
 * Get events, built once per process
 * @returns {Promise<Array>} Events, most recent first
 */
export const event = async () => (cache.events ??= getEvents());
