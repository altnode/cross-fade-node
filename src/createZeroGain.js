export default function createZeroGain(audioContext) {
  let gain = audioContext.createGain();

  gain.gain.value = 0;

  return gain;
}
