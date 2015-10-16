export default function createWaveShaper(audioContext, curve) {
  let ws = audioContext.createWaveShaper();

  ws.curve = curve;

  return ws;
}
