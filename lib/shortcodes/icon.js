module.exports = (name, size = '1em', hidden = true) => {
  const html = hidden ?
    `<svg width="${size}" height="${size}" focusable="false" aria-hidden="true">
      <use href="#icon-${name}"></use>
    </svg>` :
    `<svg width="${size}" height="${size}" focusable="false" aria-labelledby="${name}-title" role="img">
      <title id="${name}-title">${name}</title>
      <use href="#icon-${name}"></use>
    </svg>`;

  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
};
