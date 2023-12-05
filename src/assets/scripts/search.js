import aria from "./aria.js";

const searchElement = document.querySelector("#search");
const searchForm = searchElement.querySelector("form");
const searchSubmit = searchElement.querySelector(`button[type="submit"]`);
const endpoint = searchElement.dataset.searchIndex;
const pages = [];

const getPages = async () => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    pages.push(...data);
  } catch (error) {
    console.error(error);
  }
};

const findResults = (termToMatch, pages) =>
  pages.filter((item) => {
    const regex = new RegExp(termToMatch, "gi");
    return item.title.match(regex) || item.content.match(regex);
  });

const displayResults = (input) => {
  const resultsArray = findResults(input, pages);
  const result = resultsArray.map((item) => {
    const html = `<a class="form__option" href="${item.url}">${item.title}</a>`;

    return {
      value: item.title,
      html,
    };
  });

  return result;
};

if (searchElement) {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  getPages();

  searchForm.setAttribute("action", "#search");
  searchForm.removeAttribute("method");
  searchSubmit.remove(searchSubmit);

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  window.addEventListener(
    "DOMContentLoaded",
    () =>
      new aria.Combobox(
        document.querySelector("#search-combobox"),
        searchElement.querySelector(`input[type="search"]`),
        displayResults,
      ),
  );
}
