import aria from './aria.js';

export const search = () => {
  const searchForm = document.querySelector('#search');
  const searchSubmit = document.querySelector('#search-submit');
  const endpoint = searchForm.dataset.searchIndex;
  const pages = [];

  const findResults = (termToMatch, pages) => {
    return pages.filter(item => {
      const regex = new RegExp(termToMatch, 'gi');
      return item.title.match(regex) || item.content.match(regex);
    });
  };

  const displayResults = input => {
    const resultsArray = findResults(input, pages);
    const result = resultsArray.map(item => {
      const html = `
        <a class="form__option" href="${item.url}" aria-label="${item.title} (${item.layout})">
          <h3 class="form__option-title">${item.title}</h3>
          <p class="form__option-summary">${item.layout}</p>
        </a>`;

      return {
        value: item.title,
        html
      };
    });

    return result;
  };

  if (searchForm) {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => pages.push(...data));

    searchForm.setAttribute('action', '#search');
    searchForm.removeAttribute('method');
    searchSubmit.remove(searchSubmit);

    searchForm.addEventListener('submit', event => {
      event.preventDefault();
    });

    window.addEventListener('load', () => {
      return new aria.Combobox(
        document.querySelector('#search-combobox'),
        document.querySelector('#search-input'),
        displayResults
      );
    });
  }
};
