import { event } from "./event.js";

export const upcoming = async () => {
  const events = await event();

  return events
    .filter((item) => new Date(item.data.end) >= new Date())
    .sort((a, b) => new Date(a.data.start) - new Date(b.data.start));
};
