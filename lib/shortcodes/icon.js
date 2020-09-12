const slug = require('../filters/slug');

module.exports = (name, size = '1em', hidden = true) => {
  const id = slug(name);
  let html;

  if (hidden) {
    html = `
      <svg width="${size}" height="${size}" focusable="false" aria-hidden="true">
        <use href="/assets/vectors/app.svg#${id}"></use>
      </svg>
    `;
  } else {
    html = `
      <svg width="${size}" height="${size}" focusable="false" aria-labelledby="${id}-title" role="img">
        <title id="${id}-title">${name}</title>
        <use href="/assets/vectors/app.svg#${id}"></use>
      </svg>
    `;
  }

  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
};
