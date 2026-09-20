import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getImage, mediaPath } from "../../lib/utils/image.js";

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
      outputPath: "src/media/foo/bar.png",
    });
  });

  it("Gets a media path from either reference style", () => {
    assert.equal(
      mediaPath("src/media/2011/154/photo.png"),
      "2011/154/photo.png",
    );
    assert.equal(
      mediaPath("src/content/media/2011/154/photo.png"),
      "2011/154/photo.png",
    );
  });
});
