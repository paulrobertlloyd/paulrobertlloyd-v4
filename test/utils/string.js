import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getColor, getMarkdown, getTokens } from "../../lib/utils/string.js";

describe("utils/string", () => {
  it("Converts a string into a valid hex colour", () => {
    assert.equal(getColor(new Date("2024-08-17")), "#770116");
    assert.equal(getColor("Brighton"), "#0d8488");
  });

  it("Converts a string of text into Markdown", () => {
    assert.equal(getMarkdown("**Bold**"), "<p><strong>Bold</strong></p>\n");
    assert.equal(getMarkdown("**Bold**", "inline"), "<strong>Bold</strong>");
  });

  it("Convert a string of text into a series of tokens", () => {
    assert.equal(
      getTokens("The <em>quick</em> brown fox jumps over the lazy fox!"),
      "quick brown fox jumps over lazy",
    );
  });
});
