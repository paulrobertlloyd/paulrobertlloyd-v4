import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getId, getPermalink } from "../../lib/utils/page.js";

const page = {
  url: "/current/page/myFile/",
  fileSlug: "1",
  filePathStem: "/notes/2024-08-17-1",
  date: new Date(2024, 0, 1),
  inputPath: "./notes/2024-08-17-1.md",
  outputPath: "./_site/2024/230/n1/index.html",
};

const data = {
  page,
  published: "2024-08-17T12:00:00",
  typePrefix: "n",
  typeIndex: "2",
};

describe("utils/page", () => {
  it("Gets page ID", () => {
    assert.equal(getId(data), "n5YY2");
    assert.equal(getId({ page }), "5Ui1");
  });

  it("Gets page permalink", () => {
    assert.equal(getPermalink(data), "2024/230/n2");
    assert.equal(getPermalink({ page }), "2024/001/1");
  });
});
