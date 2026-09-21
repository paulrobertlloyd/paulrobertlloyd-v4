import { html } from "../utils/html.js";

const PUBLICATIONS = new Map([
  ["1755-5132", "Digital Arts"],
  ["1355-7602", "Net magazine"],
  ["1839-8915", "Offscreen Magazine"],
]);

const SITES = new Map([
  ["24ways.org", "24 ways"],
  ["agreenfocus.tumblr.com", "a.green:focus"],
  ["alistapart.com", "A List Apart"],
  ["creativebloq.com", "Creative Bloq"],
  ["css-tricks.com", "CSS-Tricks"],
  ["design--is.tumblr.com", "Design is…"],
  ["newadventuresconf.com", "New Adventures Magazine"],
  ["smashingmagazine.com", "Smashing Magazine"],
  ["the-pastry-box-project.net", "The Pastry Box Project"],
  ["workspiration.org", "Workspiration"],
  ["x-govuk.github.io", "X-GOVUK"],
]);

/**
 * Get the publication a post first appeared in
 *
 * Names a print publication by its ISSN, an online one by its hostname, and
 * falls back to the hostname itself for anywhere not listed.
 * @param {object} canonical - Canonical properties
 * @param {string} [canonical.edition] - Issue or edition, appended after name
 * @param {string} [canonical.issn] - ISSN of print publication
 * @param {string} [canonical.url] - URL post was published at
 * @returns {string} HTML
 */
export const getCanonicalHtml = ({ edition, issn, url }) => {
  const link = url ? new URL(String(url)) : undefined;
  const hostname = link?.hostname.replace(/^www\./, "");
  const name = PUBLICATIONS.get(issn) ?? SITES.get(hostname) ?? hostname;

  if (!name) {
    return "";
  }

  const cite = html`${name}`;
  const publication = link
    ? html`<a rel="canonical external" href="${link.href}">${cite}</a>`
    : cite;

  return String(edition ? html`${publication}, ${edition}` : publication);
};
