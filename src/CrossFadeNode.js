import AltAudioNode from "altnode.alt-audio-node";
import DCNode from "altnode.dc-node";
import CrossFadeCurves from "./CrossFadeCurves";
import createZeroGain from "./createZeroGain";
import createWaveShaper from "./createWaveShaper";
import { INLETS, WAVESHAPERS, FADE, DC } from "./symbols";

export default class CrossFadeNode extends AltAudioNode {
  constructor(audioContext, curveType) {
    super(audioContext);

    if (!CrossFadeCurves.hasOwnProperty(curveType)) {
      curveType = "sine";
    }

    this[DC] = new DCNode(audioContext, 1);
    this[FADE] = audioContext.createGain();
    this[WAVESHAPERS] = CrossFadeCurves[curveType].map(curve => createWaveShaper(audioContext, curve));
    this[INLETS] = [ 0, 0 ].map(() => createZeroGain(audioContext));

    this[DC].start(audioContext.currentTime);
    this[DC].connect(this[FADE]);
    this[FADE].connect(this[WAVESHAPERS][0]);
    this[FADE].connect(this[WAVESHAPERS][1]);
    this[WAVESHAPERS][0].connect(this[INLETS][0].gain);
    this[WAVESHAPERS][1].connect(this[INLETS][1].gain);
  }

  get fade() {
    return this[FADE].gain;
  }

  connect(...args) {
    this[INLETS][0].connect(...args);
    this[INLETS][1].connect(...args);
  }

  disconnect(...args) {
    this[INLETS][0].disconnect(...args);
    this[INLETS][1].disconnect(...args);
  }

  dispose() {
    this[DC].dispose();
    this[FADE].disconnect();
    this[WAVESHAPERS].forEach((node) => {
      node.disconnect();
    });
    this[INLETS].forEach((node) => {
      node.disconnect();
    });
    this[DC] = null;
    this[FADE] = null;
    this[WAVESHAPERS] = null;
    this[INLETS] = null;
  }

  __connectFrom(source, outputNum = 0, inputNum = 0) {
    source.connect(this[INLETS][inputNum], outputNum);
  }
}
