export default function () {
  const endpoint = '/archive/search.json';
  const pages = [];

  const searchForm = document.querySelector('[role="search"]');
  const searchContainer = document.querySelector('[role="search"] .form__container');
  const searchInput = document.querySelector('[role="search"] input[type="search"]');
  const searchSubmit = document.querySelector('[role="search"] button[type="submit"]');

  // Set up results list
  const resultsList = document.createElement('ol');

  function findResults(termToMatch, pages) {
    return pages.filter(item => {
      const regex = new RegExp(termToMatch, 'gi');
      return item.title.match(regex) || item.content.match(regex);
    });
  }

  function displayResults() {
    const resultsArray = findResults(this.value, pages);
    const html = resultsArray.map(item => {
      return `
        <li>
          <div class="item item--inline">
            <header class="item__header">
              <h3 class="item__title"><a href="${item.url}">${item.title}</a></h3>
            </header>
            <footer class="item__footer">
              <time datetime="${item.date_published}" aria-label="${item.date_published_long}">${item.date_published_short}</time>
            </footer>
          </div>
        </li>`;
    }).join('');

    if ((resultsArray.length === 0) || (this.value === '')) {
      resultsList.innerHTML = '<li><div class="item item--inline"><p class="item__title">Nothing matched your query</p></div></li>';
    } else {
      resultsList.innerHTML = html;
    }
  }

  if (searchForm) {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => pages.push(...data));

    searchContainer.appendChild(resultsList);

    searchForm.setAttribute('action', '#search');
    searchForm.removeAttribute('method');
    searchSubmit.parentNode.removeChild(searchSubmit);

    searchInput.addEventListener('keyup', displayResults);
    searchInput.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  }
}
