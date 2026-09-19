import slugify from "@sindresorhus/slugify";
import { getPost } from "../utils/post.js";
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
      const post = {
        ...item,
        page: {
          fileSlug: slugify(item.title, { separator: "_" }),
        },
      };

      const { permalink } = getPost(post);

      return { data: post, url: `/${permalink}`, permalink };
    })
    .toSorted((a, b) => new Date(b.data.start) - new Date(a.data.start));
};

/**
 * Get events, built once per process
 * @returns {Promise<Array>} Events, most recent first
 */
export const event = async () => (cache.events ??= getEvents());
