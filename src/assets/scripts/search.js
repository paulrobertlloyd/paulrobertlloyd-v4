import { Combobox } from "./combobox.js";

class SiteSearchElement extends HTMLElement {
  fetchIndex = async () => {
    try {
      const response = await fetch(this.index);
      const data = await response.json();

      for (const item of data) {
        this.corpus.push({
          ...item,
          // `content` is lowercased at build time, `title` is not
          search: `${item.title ?? ""}\n${item.content ?? ""}`.toLowerCase(),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  findResults = (termToMatch, corpus) => {
    const query = termToMatch.trim().toLowerCase();

    return query ? corpus.filter((item) => item.search.includes(query)) : [];
  };

  displayResults = (input) => {
    const resultsArray = this.findResults(input, this.corpus);
    const result = resultsArray.map((item) => {
      const html = `<a href="${item.url}">${item.title}</a>`;

      return {
        value: item.title,
        html,
      };
    });

    return result;
  };

  constructor() {
    super();

    // Append combobox template
    const template = this.querySelector(":scope template").content;
    this.append(template.cloneNode(true));

    this.combobox = this.querySelector(`:scope [role="combobox"]`);
    this.form = this.querySelector(":scope form");
    this.button = this.querySelector(`:scope button[type="submit"]`);
    this.input = this.querySelector(`:scope input[type="search"]`);
    this.corpus = [];
    this.index = this.getAttribute("index");
  }

  connectedCallback() {
    this.button.remove();
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this.input.setAttribute("aria-controls", "search-listbox");

    this.fetchIndex();

    new Combobox(this.combobox, this.input, this.displayResults);
  }
}

customElements.define("site-search", SiteSearchElement);
