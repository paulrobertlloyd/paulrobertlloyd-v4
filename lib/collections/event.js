import slugify from "@sindresorhus/slugify";
import eventData from "../events.js";
import { permalink } from "../filters/permalink.js";

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
      url: `/${permalink(data)}/${slug}/`,
      permalink: `${permalink(data)}/${slug}/`,
    });
  }

  return [...eventsSet].sort(
    (a, b) => new Date(b.data.start) - new Date(a.data.start),
  );
};
