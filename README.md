# altnode.CrossFadeNode
[![Build Status](http://img.shields.io/travis/altnode/cross-fade-node.svg?style=flat-square)](https://travis-ci.org/altnode/cross-fade-node)
[![NPM Version](http://img.shields.io/npm/v/altnode.cross-fade-node.svg?style=flat-square)](https://www.npmjs.org/package/altnode.cross-fade-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

![graph](https://github.com/altnode/cross-fade-node/wiki/images/cross-fade-node.png)

## Installation

```
npm install -S altnode.cross-fade-node
```

## API
### CrossFadeNode
- `constructor(audioContext: AudioContext, curveType = 'sine')`
  - `curveType: string`
    - "sine", "gate", "line"

#### Instance attributes
- `fade: AudioParam`

## Example

```js
import CrossFadeNode from "altnode.cross-fade-node";

let audioContext = new AudioContext();
let bufSrc1 = audioContext.createBufferSource();
let bufSrc2 = audioContext.createBufferSource();
let lfo = audioContext.createOscillator();
let crossFade = new CrossFadeNode(audioContext);

bufSrc1.buffer = RhythmLoop1;
bufSrc1.loop = true;
bufSrc1.start();
bufSrc1.connect(crossFade, 0, 0);

bufSrc1.buffer = RhythmLoop2;
bufSrc1.loop = true;
bufSrc1.start();
bufSrc1.connect(crossFade, 0, 1);

lfo.frequency.value = 0.5;
lfo.start();
lfo.connect(crossFade.fade);

crossFade.fade.value = 0;
crossFade.connect(audioContext.destination);
```

## LICENSE
MIT
