import assert from "power-assert";
import index from "../src/";
import CrossFadeNode from "../src/CrossFadeNode";

describe("index", () => {
  it("exports", () => {
    assert(index === CrossFadeNode);
  });
});
