import assert from "power-assert";
import CrossFadeNode from "../src/CrossFadeNode";
import CrossFadeCurves from "../src/CrossFadeCurves";
import { INLETS, WAVESHAPERS } from "../src/symbols";
import dc from "./dc.json";

describe("CorssFadeNode", () => {
  let audioContext = null;

  beforeEach(() => {
    audioContext = new global.AudioContext();
  });

  describe("constructor(audioContext: AudioContext, curveType = 'sine')", () => {
    it("works", () => {
      let fade = new CrossFadeNode(audioContext);

      assert(fade instanceof CrossFadeNode);
    });
  });
  describe("#fade: AudioParam", () => {
    it("works", () => {
      let fade = new CrossFadeNode(audioContext);

      assert(fade.fade instanceof global.AudioParam);
    });
  });
  describe("#connect(...args): void", () => {
    it("works", () => {
      let fade = new CrossFadeNode(audioContext);

      fade.connect(audioContext.destination);

      assert(audioContext.destination.$isConnectedFrom(fade[INLETS][0]));
      assert(audioContext.destination.$isConnectedFrom(fade[INLETS][1]));
    });
  });
  describe("#disconnect(...args): void", () => {
    it("works", () => {
      let fade = new CrossFadeNode(audioContext);

      fade.connect(audioContext.destination);
      fade.disconnect();

      assert(!audioContext.destination.$isConnectedFrom(fade[INLETS][0]));
      assert(!audioContext.destination.$isConnectedFrom(fade[INLETS][1]));
    });
  });
  describe("#dispose(): void", () => {
    it("works", () => {
      let fade = new CrossFadeNode(audioContext);

      fade.dispose();

      assert.throws(() => {
        fade.dispose();
      });
    });
  });
  describe("AudioGraph", () => {
    it("works", () => {
      let osc1 = audioContext.createOscillator();
      let osc2 = audioContext.createOscillator();
      let crossFade = new CrossFadeNode(audioContext);

      osc1.type = "sawtooth";
      osc2.type = "triangle";

      osc1.connect(crossFade, 0, 0);
      osc2.connect(crossFade, 0, 1);

      assert(crossFade[INLETS][0].gain.$isConnectedFrom(crossFade[WAVESHAPERS][0]));
      assert(crossFade[INLETS][1].gain.$isConnectedFrom(crossFade[WAVESHAPERS][1]));
      assert(crossFade[WAVESHAPERS][0].curve === CrossFadeCurves.sine[0]);
      assert(crossFade[WAVESHAPERS][1].curve === CrossFadeCurves.sine[1]);

      assert.deepEqual(crossFade[INLETS][0].toJSON(), {
        name: "GainNode",
        gain: {
          value: 0,
          inputs: [
            {
              name: "WaveShaperNode",
              oversample: "none",
              inputs: [
                {
                  name: "GainNode",
                  gain: {
                    value: 1,
                    inputs: []
                  },
                  inputs: [ dc ]
                }
              ]
            }
          ]
        },
        inputs: [
          {
            name: "OscillatorNode",
            type: "sawtooth",
            frequency: {
              value: 440,
              inputs: []
            },
            detune: {
              value: 0,
              inputs: []
            },
            inputs: []
          }
        ]
      });

      assert.deepEqual(crossFade[INLETS][1].toJSON(), {
        name: "GainNode",
        gain: {
          value: 0,
          inputs: [
            {
              name: "WaveShaperNode",
              oversample: "none",
              inputs: [
                {
                  name: "GainNode",
                  gain: {
                    value: 1,
                    inputs: []
                  },
                  inputs: [ dc ]
                }
              ]
            }
          ]
        },
        inputs: [
          {
            name: "OscillatorNode",
            type: "triangle",
            frequency: {
              value: 440,
              inputs: []
            },
            detune: {
              value: 0,
              inputs: []
            },
            inputs: []
          }
        ]
      });
    });
  });
});
