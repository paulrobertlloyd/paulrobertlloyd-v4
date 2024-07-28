const issns = {
  "1755-5132": "Digital Arts",
  "1355-7602": "Net magazine",
  "1839-8915": "Offscreen Magazine",
};

const uris = {
  "24ways.org": "24 ways",
  "agreenfocus.tumblr.com": "a.green:focus",
  "alistapart.com": "A List Apart",
  "creativebloq.com": "Creative Bloq",
  "css-tricks.com": "CSS-Tricks",
  "design--is.tumblr.com": "Design is…",
  "newadventuresconf.com": "New Adventures Magazine",
  "smashingmagazine.com": "Smashing Magazine",
  "the-pastry-box-project.net": "The Pastry Box Project",
  "workspiration.org": "Workspiration",
  "x-govuk.github.io": "X-GOVUK",
};

/**
 * Get canonical publication from post properties
 * @param {object} canonical - Canonical properties
 * @returns {string} HTML for canonical publication
 */
export const canonical = (canonical) => {
  let href;
  let text;

  if (canonical.url) {
    const url = new URL(String(canonical.url));
    const hostname = url.hostname.replaceAll(/(?:www\.)?/g, "");

    href = url.href;
    text = issns[canonical.issn] || uris[hostname] || hostname;
  } else if (canonical.issn) {
    text = issns[canonical.issn];
  }

  let html = `<cite>${text}</cite>`;

  if (href) {
    html = `<a rel="canonical external" href="${href}">${html}</a>`;
  }

  if (canonical.edition) {
    html += `, ${canonical.edition}`;
  }

  return html;
};
