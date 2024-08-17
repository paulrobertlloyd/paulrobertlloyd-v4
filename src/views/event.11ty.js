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
        color: ({ event }) => event.data.color,
        properties: ({ event }) => event.data,
      },
    };
  }

  render({ event }) {
    return this.markdown(event.data.content);
  }
}
