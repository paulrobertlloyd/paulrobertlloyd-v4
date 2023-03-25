import aria from './aria.js';

const searchForm = document.querySelector('#search');
const searchSubmit = document.querySelector('#search-submit');
const endpoint = searchForm.dataset.searchIndex;
const pages = [];

/**
 * Capitalise first later of string
 *
 * @param {string} string - String
 * @returns {string} Capitalised string
 */
function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getPages = async () => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    pages.push(...data);
  } catch (error) {
    console.error(error);
  }
};

const findResults = (termToMatch, pages) => pages.filter(item => {
  const regex = new RegExp(termToMatch, 'gi');
  return item.title.match(regex) || item.content.match(regex);
});

const displayResults = input => {
  const resultsArray = findResults(input, pages);
  const result = resultsArray.map(item => {
    const html = `
      <a class="form__option" href="${item.url}" aria-label="${item.title} (${item.layout})">
        <h3 class="form__option-title">${item.title}</h3>
        <p class="form__option-summary">${capitalise(item.layout)}</p>
      </a>`;

    return {
      value: item.title,
      html,
    };
  });

  return result;
};

if (searchForm) {
  getPages();

  searchForm.setAttribute('action', '#search');
  searchForm.removeAttribute('method');
  searchSubmit.remove(searchSubmit);

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
  });

  window.addEventListener('DOMContentLoaded', () => new aria.Combobox(
    document.querySelector('#search-combobox'),
    document.querySelector('#search-input'),
    displayResults,
  ));
}
