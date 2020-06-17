import { assertEquals } from "./test_deps.ts";
import { isOdd } from "./mod.ts";

const { test } = Deno;

export const runTests = () => {
  // ok case
  test("isOdd-true", () => {
    assertEquals(isOdd(1), true);
  });

  // ng case
  test("isOdd-false", () => {
    assertEquals(isOdd(2), false);
  });
};
