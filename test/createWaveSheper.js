import assert from "power-assert";
import createWaveShaper from "../src/createWaveShaper";

describe("createWaveShaper(audioContext: AudioContext, curve: Float32Array): WaveShaperNode", () => {
  it("works", () => {
    let curve = new Float32Array([ -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4 ]);
    let audioContext = new global.AudioContext();
    let ws = createWaveShaper(audioContext, curve);

    assert(ws instanceof global.WaveShaperNode);
    assert(ws.curve === curve);
  });
});
