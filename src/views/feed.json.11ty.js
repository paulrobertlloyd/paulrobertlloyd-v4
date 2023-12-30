import path from "node:path";

export default class JsonFeed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "feed.json",
    };
  }

  async render({ app, pkg, collections }) {
    const feed = {
      version: "https://jsonfeed.org/version/1.1",
      title: app.name,
      description: app.description,
      home_page_url: app.url,
      feed_url: this.absolute_url("feed.json", app.url),
      favicon: this.absolute_url(app.icons[0].src, app.url),
      icon: this.absolute_url(app.icons[1].src, app.url),
      language: app.lang,
      authors: [
        {
          name: pkg.author.name,
          url: pkg.author.url,
          avatar:
            "https://gravatar.com/avatar/15091a37bacfa4bdd011282627eaca2b?s=512",
        },
      ],
      items: [],
    };

    const items = collections.syndicate.slice(0, 25);
    // TODO: Use `import` statement once 11ty supports ESM
    const { default: mime } = await import("mime/lite");

    for await (const item of items) {
      const { bookmark_of, category, in_reply_to, photo, summary, title, url } =
        item.data;
      const external_url = bookmark_of || in_reply_to || url;

      feed.items.push({
        id: this.absolute_url(item.url, app.url),
        url: this.absolute_url(item.url, app.url),
        date_published: item.date,
        ...(title && { title }),
        ...(summary && { summary: this.markdown(summary, "inline") }),
        ...(item.templateContent && {
          content_html: await this.template_content_to_feed_html(item),
        }),
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
