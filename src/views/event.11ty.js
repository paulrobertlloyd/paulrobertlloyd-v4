export default class Event {
  data() {
    return {
      layout: "event.webc",
      pagination: {
        data: "collections.event",
        size: 1,
        alias: "event",
        addAllPagesToCollections: true,
      },
      permalink: ({ event }) => event.permalink,
    };
  }

  render({ event }) {
    return this.markdown(event.data.content);
  }
}
