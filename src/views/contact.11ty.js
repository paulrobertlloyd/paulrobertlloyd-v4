export default class Contact {
  data() {
    return {
      layout: "page.liquid",
      title: "Contact",
      summary:
        "Interested in working with me on your next project? Want me to speak at your next event? Maybe you have a question you think I might be able to answer. Either way, get in touch using the form below.",
      visibility: "unlisted",
      permalink: "contact/",
    };
  }

  async render() {
    return await this.renderTemplate(`{% render 'form/contact' %}`, "liquid");
  }
}
