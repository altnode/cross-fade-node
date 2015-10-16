import assert from "power-assert";
import createZeroGain from "../src/createZeroGain";

describe("createZeroGain(audioContext: AudioContext): GainNode", () => {
  it("works", () => {
    let audioContext = new global.AudioContext();
    let gain = createZeroGain(audioContext);

    assert(gain instanceof global.GainNode);
    assert(gain.gain.value === 0);
  });
});
