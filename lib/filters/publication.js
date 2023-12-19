/**
 * Get articles from canonical publication
 * @param {Array} collection - Collection
 * @param {string} issn - Publication ISSN
 * @param {string} url - Publication URL
 * @returns {string} Hostname, i.e. youtube.com
 */
export default (collection, issn, url) =>
  collection.filter((item) => {
    const publicationIssn = item.data?.canonical?.issn;
    const publicationUrl = item.data?.canonical?.url;

    return (
      (publicationIssn && publicationIssn === issn) ||
      (publicationUrl && publicationUrl.includes(url))
    );
  });
