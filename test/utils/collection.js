import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getGeojson, getSiblings } from "../../lib/utils/collection.js";

const collection = [
  {
    data: {
      tags: ["foo", "bar"],
      geojson: {
        features: [{ type: "Feature", geometry: {} }],
      },
    },
    url: "/test/a",
  },
  {
    data: {
      tags: ["bar"],
      geojson: {
        features: [
          { type: "Feature", geometry: {} },
          { type: "Feature", geometry: {} },
        ],
      },
    },
    url: "/test/b",
  },
  {
    data: { tags: ["foo", "bar"] },
    url: "/test/c",
  },
];

const data = {
  tags: ["foo", "bar"],
  page: { url: "/test/c" },
};

describe("utils/date", () => {
  it("Generates GeoJSON from combined posts in a collection", () => {
    const result = getGeojson(collection, "bar");

    assert.equal(result.features.length, 3);
  });

  it("Gets sibling pages", () => {
    const result = getSiblings.apply(data, [collection, "foo"]);

    assert.deepEqual(result[0].data.tags, ["foo", "bar"]);
    assert.equal(result[0].url, "/test/a");
    assert.equal(result.length, 1);
  });
});
