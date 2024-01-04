class AppleJamElement extends HTMLElement {
  constructor() {
    super();

    this.appleMusicLink = this.querySelector(`a[href*="music.apple.com"]`);
    this.jam = this.appleMusicLink.parentNode;
  }

  embedCode(href) {
    const embed = document.createElement("iframe");
    embed.src = href.replace("music.apple.com", "embed.music.apple.com");
    embed.height = embed.src.includes("music-video") ? 450 : 175;

    return embed;
  }

  connectedCallback() {
    if (this.appleMusicLink) {
      this.jam.after(this.embedCode(this.appleMusicLink.href));
      this.jam.remove();
    }
  }
}

customElements.define("apple-jam", AppleJamElement);
