const LENGTH = 8192;
const HALF_PI = 0.5 * Math.PI;

function makeFadeCurve(func) {
  let result = new Float32Array(LENGTH);
  let half = LENGTH >> 1;

  for (let i = 0; i < LENGTH; i++) {
    if (i < half) {
      result[i] = Math.round(func(0));
    } else {
      result[i] = func((i - half) / half);
    }
  }

  return result;
}

export default {
  sine: [ makeFadeCurve(x => Math.cos(x * HALF_PI)), makeFadeCurve(x => Math.sin(x * HALF_PI)) ],
  gate: [ makeFadeCurve(x => x < 0.5 ? 1 : 0), makeFadeCurve(x => x < 0.5 ? 0 : 1) ],
  line: [ makeFadeCurve(x => 1 - x), makeFadeCurve(x => x) ]
};
