import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getImage } from "../../lib/utils/image.js";

describe("utils/image", () => {
  it("Gets Eleventy image metadata for a route map image", async () => {
    const source = "https://website.example/image.png";
    const result = await getImage(source, "foo", "bar", true);

    assert.deepEqual(result, {
      format: "png",
      width: 100,
      height: 100,
      url: "/media/foo/bar.png",
      sourceType: "image/png",
      srcset: "/media/foo/bar.png 100w",
      filename: "bar.png",
      outputPath: "src/content/media/foo/bar.png",
    });
  });
});
