import { MyExtension } from "./code";
import { test, expect } from "vitest";

test("test", () => {
  const extension = new MyExtension();
  expect(extension.name).toBe("my-extension");
});
