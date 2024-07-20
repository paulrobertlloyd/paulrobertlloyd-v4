import crypto from "node:crypto";

/**
 * Convert a string into a valid hex colour
 * @param {string} string - String
 * @returns {string|undefined} RGB hex code, i.e. "#7f1de4"
 */
export const getColor = (string) => {
  if (!string) {
    return;
  }

  const hash = crypto.hash("md5", String(string), "hex");
  return `#${hash.slice(0, 6)}`;
};
