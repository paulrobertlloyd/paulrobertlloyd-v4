import process from "node:process";

/**
 * Rewrite pagination path (production only)
 * @param {string} string - Path, i.e. /page/2.html
 * @returns {string} Rewritten path, i.e. /?page=2
 */
export function pagination_path(string) {
  if (!string) {
    return "";
  }

  if (process.env.NODE_ENV === "production") {
    string.replace(".html", "").replace("page/", "?page=");
  }

  return string;
}
