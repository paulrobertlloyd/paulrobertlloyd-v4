export default class Event {
  data() {
    return {
      layout: "event.liquid",
      pagination: {
        data: "collections.event",
        size: 1,
        alias: "event",
        addAllPagesToCollections: true,
      },
      permalink: ({ event }) => event.permalink,
      eleventyComputed: {
        title: ({ event }) => event.data.title,
        start: ({ event }) => event.data.start,
        end: ({ event }) => event.data.end,
        location: ({ event }) => event.data.location,
        summary: ({ event }) => event.data.summary,
        uid: ({ event }) => event.data.uid,
        color: ({ event }) => event.data.color,
      },
    };
  }

  render({ event }) {
    return this.markdown(event.data.content);
  }
}
