import assert from "power-assert";
import CrossFadeCurves from "../src/CrossFadeCurves";

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

describe("CrossFadeCurves", () => {
  describe("sine", () => {
    it("works", () => {
      assert(Array.isArray(CrossFadeCurves.sine));

      assert(closeTo(CrossFadeCurves.sine[0][0], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][512], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][1024], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][1536], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][2048], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][2560], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][3072], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][3584], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][4096], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][4608], 0.9807852506637573, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][5120], 0.9238795042037964, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][5632], 0.8314695954322815, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][6144], 0.7071067690849304, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][6656], 0.5555702447891235, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][7168], 0.3826834261417389, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[0][7680], 0.19509032368659973, 1e-6));

      assert(closeTo(CrossFadeCurves.sine[1][0], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][512], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][1024], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][1536], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][2048], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][2560], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][3072], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][3584], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][4096], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][4608], 0.19509032368659973, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][5120], 0.3826834261417389, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][5632], 0.5555702447891235, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][6144], 0.7071067690849304, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][6656], 0.8314695954322815, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][7168], 0.9238795042037964, 1e-6));
      assert(closeTo(CrossFadeCurves.sine[1][7680], 0.9807852506637573, 1e-6));
    });
  });
  describe("gate", () => {
    it("works", () => {
      assert(Array.isArray(CrossFadeCurves.line));

      assert(closeTo(CrossFadeCurves.gate[0][0], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][512], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][1024], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][1536], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][2048], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][2560], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][3072], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][3584], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][4096], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][4608], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][5120], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][5632], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][6144], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][6656], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][7168], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[0][7680], 0, 1e-6));

      assert(closeTo(CrossFadeCurves.gate[1][0], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][512], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][1024], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][1536], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][2048], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][2560], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][3072], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][3584], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][4096], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][4608], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][5120], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][5632], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][6144], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][6656], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][7168], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.gate[1][7680], 1, 1e-6));
    });
  });
  describe("line", () => {
    it("works", () => {
      assert(Array.isArray(CrossFadeCurves.line));

      assert(closeTo(CrossFadeCurves.line[0][0], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][512], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][1024], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][1536], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][2048], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][2560], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][3072], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][3584], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][4096], 1, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][4608], 0.875, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][5120], 0.75, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][5632], 0.625, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][6144], 0.5, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][6656], 0.375, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][7168], 0.25, 1e-6));
      assert(closeTo(CrossFadeCurves.line[0][7680], 0.125, 1e-6));

      assert(closeTo(CrossFadeCurves.line[1][0], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][512], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][1024], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][1536], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][2048], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][2560], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][3072], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][3584], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][4096], 0, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][4608], 0.125, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][5120], 0.25, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][5632], 0.375, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][6144], 0.5, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][6656], 0.625, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][7168], 0.75, 1e-6));
      assert(closeTo(CrossFadeCurves.line[1][7680], 0.875, 1e-6));
    });
  });
});
