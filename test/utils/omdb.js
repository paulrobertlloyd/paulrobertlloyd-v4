import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getMovieData } from "../../lib/utils/omdb.js";

describe("utils/omdb", () => {
  it("Gets movie information", async () => {
    const result = await getMovieData("https://www.imdb.com/title/tt6710474");

    assert.deepEqual(result.Title, "Everything Everywhere All at Once");
    assert.deepEqual(result.Year, "2022");
    assert.deepEqual(result.Director, "Daniel Kwan, Daniel Scheinert");
    assert.deepEqual(result.Writer, "Daniel Kwan, Daniel Scheinert");
  });
});
