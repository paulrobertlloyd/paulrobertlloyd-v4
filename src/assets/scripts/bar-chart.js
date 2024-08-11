const template = document.createElement("template");

template.innerHTML = `<style>
  :host {
    --bar-chart-color: white;
    --bar-chart-background: black;

    overflow-x: scroll;
    overflow-y: hidden;
    padding-block-end: 1.5em;
    position: relative;
  }

  table {
    display: grid;
  }

  caption {
    position: absolute;
  }

  caption,
  th {
    color: var(--bar-chart-color);
    font-size: medium;
    font-weight: normal;
    text-align: start;
  }

  caption abbr {
    &::before {
      content: "◼︎ " / "";
    }

    &:first-of-type::before {
      color: var(--bar-chart-color-1);
    }

    &:last-of-type::before {
      color: var(--bar-chart-color-2);
    }
  }

  tbody {
    display: flex;
  }

  tr {
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    height: 33vh;
  }

  th {
    font-size: small;
    inline-size: max-content;
    rotate: 60deg;
    translate: 1em 1.5ch;
  }

  td {
    align-items: end;
    block-size: 100%;
    display: flex;
    position: relative;
    border-block-end: 1px solid var(--bar-chart-color);

    [style^="--bar-chart-size"] {
      block-size: var(--bar-chart-size);
      display: block;
      position: absolute;
    }

    [style^="--bar-chart-size"]:first-of-type {
      background-color: var(--bar-chart-color-1);
      inline-size: 39%;
      inset-inline-start: 10%;
    }

    [style^="--bar-chart-size"]:last-of-type {
      background-color: var(--bar-chart-color-2);
      inline-size: 39%;
      inset-inline-end: 10%;
    }

    [style^="--bar-chart-size"]:hover span {
      display: block;
    }
  }

  a {
    display: contents;
  }

  span {
    --pointer-size: 1ch;

    background: var(--bar-chart-color);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - var(--pointer-size)),
      var(--pointer-size) calc(100% - var(--pointer-size)),
      0 100%
    );
    color: var(--bar-chart-background);
    display: none;
    font-size: 90%;
    inset-block-start: -3em;
    padding-block: var(--pointer-size) calc(var(--pointer-size) * 2);
    padding-inline: var(--pointer-size);
    position: absolute;
    white-space: nowrap;
    z-index: 2;
  }
</style>`;

class BarChartElement extends HTMLElement {
  constructor() {
    super();

    this.table = this.querySelector("table");
    this.table.hidden = false;
  }

  chartSize() {
    for (const data of this.table.querySelectorAll("data")) {
      console.log("data", data);
      const total = data.dataset.total;
      const value = data.value;
      const scale = (value / total) * 100;

      data.style.setProperty("--bar-chart-size", `${scale / 4}%`);
    }
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
    this.shadowRoot.append(this.table);

    this.chartSize();
  }
}

customElements.define("bar-chart", BarChartElement);
