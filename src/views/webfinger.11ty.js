export default class WebFinger {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: ".well-known/webfinger",
    };
  }

  async render() {
    const webfinger = {
      subject: "acct:paulrobertlloyd@mastodon.social",
      aliases: [
        "https://mastodon.social/@paulrobertlloyd",
        "https://mastodon.social/users/paulrobertlloyd",
      ],
      links: [
        {
          rel: "http://webfinger.net/rel/profile-page",
          type: "text/html",
          href: "https://mastodon.social/@paulrobertlloyd",
        },
        {
          rel: "self",
          type: "application/activity+json",
          href: "https://mastodon.social/users/paulrobertlloyd",
        },
        {
          rel: "http://ostatus.org/schema/1.0/subscribe",
          template: "https://mastodon.social/authorize_interaction?uri={uri}",
        },
        {
          rel: "http://webfinger.net/rel/avatar",
          type: "image/jpeg",
          href: "https://files.mastodon.social/accounts/avatars/000/007/460/original/46e3a4288dc4d399.jpg",
        },
      ],
    };

    return JSON.stringify(webfinger, undefined, 2);
  }
}
