import { event } from "./event.js";

export const attended = async () => {
  const events = await event();

  return events
    .filter((item) => new Date(item.data.end) <= new Date())
    .toSorted((a, b) => new Date(b.data.start) - new Date(a.data.start));
};
