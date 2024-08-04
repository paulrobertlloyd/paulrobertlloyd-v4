const template = document.createElement("template");

template.innerHTML = `<style>
  :host {
    display: block
  }

  :host iframe {
    border: 0;
    inline-size: 100%;
    border-radius: 10px;
  }
</style>`;

class AppleJamElement extends HTMLElement {
  constructor() {
    super();

    this.appleMusicLink = this.querySelector(`a[href*="music.apple.com"]`);
    this.jam = this.appleMusicLink.parentNode;
  }

  embedCode(href) {
    const embed = document.createElement("iframe");
    embed.src = href.replace("music.apple.com", "embed.music.apple.com");
    embed.height = embed.src.includes("music-video") ? 432 : 175;
    embed.loading = "lazy";

    return embed;
  }

  connectedCallback() {
    if (this.appleMusicLink) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(template.content.cloneNode(true));
      this.shadowRoot.append(this.embedCode(this.appleMusicLink.href));
    }
  }
}

customElements.define("apple-jam", AppleJamElement);
