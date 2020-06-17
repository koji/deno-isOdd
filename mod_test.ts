import { assertEquals } from "./test_deps.ts";
import { isOdd } from "./mod.ts";

// ok case
Deno.test("isOdd-true", () => {
  assertEquals(isOdd(1), true);
});

// ng case
Deno.test("isOdd-false", () => {
  assertEquals(isOdd(2), false);
});
