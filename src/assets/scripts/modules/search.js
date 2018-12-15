import aria from './aria';

export default function () {
  const searchForm = document.getElementById('search');
  const searchSubmit = document.getElementById('search-submit');
  const endpoint = searchForm.dataset.searchIndex;
  const pages = [];

  function findResults(termToMatch, pages) {
    return pages.filter(item => {
      const regex = new RegExp(termToMatch, 'gi');
      return item.title.match(regex) || item.content.match(regex);
    });
  }

  function displayResults(input) {
    const resultsArray = findResults(input, pages);
    const result = resultsArray.map(item => {
      const html = `
        <a class="form__option" href="${item.url}" aria-label="${item.title} (${item.type})">
          <h3 class="form__option-title">${item.title}</h3>
          <p class="form__option-summary">${item.type}</p>
        </a>`;

      return {
        value: item.title,
        html
      };
    });

    return result;
  }

  if (searchForm) {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => pages.push(...data));

    searchForm.setAttribute('action', '#search');
    searchForm.removeAttribute('method');
    searchSubmit.parentNode.removeChild(searchSubmit);

    window.addEventListener('load', () => {
      return new aria.Combobox(
        document.getElementById('search-combobox'),
        document.getElementById('search-input'),
        displayResults
      );
    });
  }
}
