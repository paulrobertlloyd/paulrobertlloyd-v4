import process from "node:process";
import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { getMapboxUrl } from "../../lib/utils/mapbox.js";

const { MAPBOX_TOKEN } = process.env;

describe("utils/mapbox", () => {
  it("Gets static Mapbox URL", () => {
    const marker = "pin-s-a+f00(50,0)";

    assert.deepEqual(
      getMapboxUrl(marker, 100, 100),
      `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/static/pin-s-a+f00(50,0)/auto/100x100@2x?access_token=${MAPBOX_TOKEN}&logo=false&padding=60`,
    );
  });
});
