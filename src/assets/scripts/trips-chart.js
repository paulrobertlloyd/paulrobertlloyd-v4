import { Chart } from "https://unpkg.com/frappe-charts@1.6.2/dist/frappe-charts.min.esm";

class TripsChartElement extends HTMLElement {
  constructor() {
    super();

    this.table = this.querySelector("table");
  }

  getNames() {
    const rows = [...this.table.rows];

    return {
      km: rows[0].children[1].textContent,
      kg: rows[0].children[2].textContent,
    };
  }

  getValues() {
    const rows = [...this.table.tBodies[0].rows];

    let years = [];
    let kms = [];
    let kgs = [];

    for (const row of rows) {
      years.push(row.children[0].textContent);
      kms.push(row.children[1].textContent);
      kgs.push(row.children[2].textContent);
    }

    return { years, kms, kgs };
  }

  connectedCallback() {
    // Hide source data table
    this.table.hidden = true;

    const names = this.getNames(this.table);
    const values = this.getValues(this.table);

    const data = {
      labels: values.years,
      datasets: [
        { chartType: "bar", name: names.km, values: values.kms },
        { chartType: "line", name: names.kg, values: values.kgs },
      ],
    };

    return new Chart(this, {
      title: "",
      axisOptions: {
        xIsSeries: 1,
        xAxisMode: "tick",
      },
      barOptions: {
        spaceRatio: 0.2,
      },
      colors: ["#10e", "#999"],
      data,
      height: 480,
    });
  }
}

customElements.define("trips-chart", TripsChartElement);
