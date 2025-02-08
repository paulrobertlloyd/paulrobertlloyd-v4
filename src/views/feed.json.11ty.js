import path from "node:path";
import mime from "mime/lite";

export default class JsonFeed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "feed.json",
    };
  }

  async render({ app, author, collections }) {
    const feed = {
      version: "https://jsonfeed.org/version/1.1",
      title: app.name,
      description: app.description,
      home_page_url: app.url,
      feed_url: this.absolute_url("feed.json", app.url),
      favicon: this.absolute_url(app.icons[0].src, app.url),
      icon: this.absolute_url(app.icons[1].src, app.url),
      language: app.lang,
      authors: [author],
      items: [],
    };

    const items = collections.syndicate.slice(0, 25);

    for await (const item of items) {
      const {
        bookmarkOf,
        category,
        inReplyTo,
        photo,
        published,
        summary,
        title,
        url,
      } = item.data;
      const external_url = bookmarkOf || inReplyTo || url;
      const content_html = await this.feed_html(item);

      feed.items.push({
        id: this.absolute_url(item.url, app.url),
        url: this.absolute_url(item.url, app.url),
        date_published: new Date(published).toISOString(),
        ...(title && { title }),
        ...(summary && { summary: this.markdown(summary, "inline") }),
        ...(content_html && { content_html }),
        ...(category > 0 && { tags: category }),
        ...(external_url && { external_url }),
        ...(photo && {
          attachments: photo.map((attachment) => ({
            url: this.absolute_url(attachment.url, app.url),
            title: attachment.alt,
            mime_type: mime.getType(path.extname(attachment.url)),
          })),
        }),
      });
    }

    return JSON.stringify(feed, undefined, 2);
  }
}
