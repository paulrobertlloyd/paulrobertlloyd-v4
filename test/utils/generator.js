import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { chunk, range } from "../../lib/utils/generator.js";

describe("utils/generator", () => {
  it("Yields an array chunked into arrays of specified size", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = [...chunk(array, 3)];

    assert.deepEqual(result[0], [1, 2, 3]);
    assert.deepEqual(result[1], [4, 5, 6]);
    assert.deepEqual(result[2], [7, 8]);
  });
});

describe("utils/generator", () => {
  it("Yields a range of numbers", () => {
    assert.deepEqual([...range(0, 3)], [0, 1, 2, 3]);
    assert.deepEqual([...range(3, 6)], [3, 4, 5, 6]);
  });
});
