import { event } from "./event.js";

export const attended = async () => {
  const now = Date.now();
  const events = await event();

  return events.filter((item) => Date.parse(item.data.end) < now);
};
