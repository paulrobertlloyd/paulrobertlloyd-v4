import { Combobox } from "./combobox.js";

class SiteSearchElement extends HTMLElement {
  constructor() {
    super();

    // Append combobox template
    const template = this.querySelector("template").content;
    this.append(template.cloneNode(true));

    this.combobox = this.querySelector(`[role="combobox"]`);
    this.form = this.querySelector("form");
    this.button = this.querySelector(`button[type="submit"]`);
    this.input = this.querySelector(`input[type="search"]`);
    this.corpus = [];
    this.index = this.getAttribute("index");
  }

  fetchIndex = async () => {
    try {
      const response = await fetch(this.index);
      const data = await response.json();
      this.corpus.push(...data);
    } catch (error) {
      console.error(error);
    }
  };

  findResults = (termToMatch, corpus) =>
    corpus.filter((item) => {
      const regex = new RegExp(termToMatch, "gi");
      return item.title.match(regex) || item.content.match(regex);
    });

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
