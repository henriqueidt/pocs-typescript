import { describe, expect, it } from "vitest";
import { sum } from "../src/main";

describe("Main", () => {
  it("should run a test", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
