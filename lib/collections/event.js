import slugify from "@sindresorhus/slugify";
import { getPermalink } from "../utils/page.js";
import eventData from "../events.js";

export const event = async () => {
  const eventsSet = new Set();

  const events = await eventData();
  for await (const data of events) {
    const slug = slugify(data.title, { separator: "_" });

    eventsSet.add({
      data: {
        ...data,
        properties: data,
      },
      url: `/${getPermalink(data)}/${slug}/`,
      permalink: `${getPermalink(data)}/${slug}/`,
    });
  }

  return [...eventsSet].sort(
    (a, b) => new Date(b.data.start) - new Date(a.data.start),
  );
};
