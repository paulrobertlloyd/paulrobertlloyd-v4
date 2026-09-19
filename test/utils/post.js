import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getPost } from "../../lib/utils/post.js";

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

describe("utils/post", () => {
  it("Gets post ID", () => {
    assert.equal(getPost(data).id, "n5YY2");
    assert.equal(getPost({ page }).id, "5Ui1");
  });

  it("Gets post permalink", () => {
    assert.equal(getPost(data).shortPath, "2024/230/n2");
    assert.equal(getPost({ page }).shortPath, "2024/001/1");
  });
});
