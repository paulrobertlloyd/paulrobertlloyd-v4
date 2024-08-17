import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { isLeapYear, daysInMonth, getDayOfYear } from "../../lib/utils/date.js";

describe("utils/date", () => {
  it("Checks if date is in a leap year", () => {
    assert.equal(isLeapYear(new Date("2024-01")), true);
    assert.equal(isLeapYear(new Date("2023-01")), false);
  });

  it("Gets number of days in the month for given data", () => {
    assert.equal(daysInMonth(new Date("2023-01-01"))[0], 31);
    assert.equal(daysInMonth(new Date("2023-01-01"))[1], 28);
    assert.equal(daysInMonth(new Date("2023-01-01"))[2], 31);
    assert.equal(daysInMonth(new Date("2023-01-01"))[3], 30);
    assert.equal(daysInMonth(new Date("2024-02-01"))[1], 29);
  });

  it("Gets day of the year for a given date", () => {
    assert.equal(getDayOfYear(new Date("2024-08-17")), 230);
    assert.equal(getDayOfYear(new Date("2023-08-17")), 229);
  });
});
