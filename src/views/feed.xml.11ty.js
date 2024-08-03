import { stringify } from "@lowlighter/xml";

export default class AtomFeed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "feed.xml",
    };
  }

  async render({ app, collections, currentYear, pkg }) {
    const feed = {
      "@xmlns": "http://www.w3.org/2005/Atom",
      id: this.absolute_url("feed.xml", app.url),
      title: app.name,
      subtitle: app.description,
      updated: new Date().toISOString(),
      author: {
        name: pkg.author.name,
        email: pkg.author.email,
        uri: pkg.author.url,
      },
      link: [
        {
          "@rel": "self",
          "@href": this.absolute_url("feed.xml", app.url),
          "@type": "application/atom+xml",
        },
        {
          "@rel": "alternate",
          "@href": app.url,
          "@type": "text/html",
        },
        {
          "@rel": "hub",
          "@href": "https://pubsubhubbub.superfeedr.com",
        },
      ],
      icon: {
        "#text": this.absolute_url(app.icons[1].src, app.url),
      },
      rights: {
        "#text": `&#169; ${currentYear} ${pkg.author.name}.`,
      },
      entry: [],
    };

    const items = collections.syndicate.slice(0, 25);

    for await (const item of items) {
      const { bookmark_of, category, in_reply_to, summary, url } = item.data;
      const external_url = bookmark_of || in_reply_to || url;
      const html = await this.template_content_to_feed_html(item);

      feed.entry.push({
        id: this.absolute_url(item.url, app.url),
        title: item.data.title || "",
        ...(summary && { summary }),
        updated: new Date(item.data.published).toISOString(),
        link: external_url
          ? [
              {
                "@rel": "alternate",
                "@href": external_url,
                "@type": "text/html",
              },
              {
                "@rel": "related",
                "@href": this.absolute_url(item.url, app.url),
                "@type": "text/html",
              },
            ]
          : {
              "@rel": "alternate",
              "@href": this.absolute_url(item.url, app.url),
              "@type": "text/html",
            },
        content: {
          "@type": "html",
          "~name": "~cdata",
          "#text": html,
        },
        ...(category?.length > 0 && {
          category: category.map((tag) => ({
            "@term": tag,
            "@label": tag,
          })),
        }),
      });
    }

    return stringify({
      "@version": "1.0",
      "@encoding": "utf8",
      feed,
    });
  }
}
