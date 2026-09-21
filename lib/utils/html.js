const ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * HTML that has already been escaped, so it can be nested in other HTML
 */
class Html extends String {}

/**
 * Escape a value, unless it is already HTML
 *
 * Arrays are escaped item by item and joined.
 * @param {string|Html|Array} value - Value
 * @returns {string} Escaped text
 */
const escapeValue = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => escapeValue(item)).join("");
  }

  return value instanceof Html
    ? String(value)
    : String(value ?? "").replaceAll(
        /[&<>"']/g,
        (character) => ESCAPES[character],
      );
};

/**
 * Tag a template literal as HTML, escaping interpolated values
 * @param {Array<string>} strings - Literal parts
 * @param {...(string|Html)} values - Interpolated values
 * @returns {Html} HTML
 */
export const html = (strings, ...values) =>
  new Html(
    String.raw({ raw: strings }, ...values.map((value) => escapeValue(value))),
  );
