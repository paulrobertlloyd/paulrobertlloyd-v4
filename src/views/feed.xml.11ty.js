import { stringify } from "@lowlighter/xml";

export default class AtomFeed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "feed.xml",
    };
  }

  async render({ app, author, collections, currentYear }) {
    const feed = {
      "@xmlns": "http://www.w3.org/2005/Atom",
      id: this.absolute_url("feed.xml", app.url),
      title: app.name,
      subtitle: app.description,
      updated: new Date().toISOString(),
      author: {
        name: author.name,
        email: author.email,
        uri: author.url,
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
        "#text": `&#169; ${currentYear} ${author.name}.`,
      },
      entry: [],
    };

    const items = collections.syndicate.slice(0, 25);

    for await (const item of items) {
      const {
        bookmarkOf,
        category,
        inReplyTo,
        published,
        summary,
        title,
        url,
      } = item.data;
      const external_url = bookmarkOf || inReplyTo || url;
      const html = await this.feed_html(item);

      feed.entry.push({
        id: this.absolute_url(item.url, app.url),
        title: title || "",
        ...(summary && { summary }),
        updated: new Date(published).toISOString(),
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
            "@label": tag.replace("_", " "),
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
