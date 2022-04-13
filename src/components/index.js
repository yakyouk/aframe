var registerComponent = require('../core/component').registerComponent;

function stubComponent (name) {
  registerComponent(name, {
    init () {
      console.warn(`The ${name} aframe component no longer exists.`);
    }
  });
}

// animation is re-implemented in hubs
stubComponent('cursor');
stubComponent('geometry');
stubComponent('generic-tracked-controller-controls');
stubComponent('hand-controls');
stubComponent('laser-controls');
stubComponent('line');
stubComponent('link');
stubComponent('look-controls');
stubComponent('material');
stubComponent('obj-model');
require('./position');
stubComponent('raycaster');
require('./rotation');
require('./scale');
require('./shadow');
stubComponent('sound');
require('./visible');
stubComponent('wasd-controls');

stubComponent('scene/background');
stubComponent('scene/debug');
stubComponent('scene/device-orientation-permission-ui');
stubComponent('scene/embedded');
stubComponent('scene/inspector');
stubComponent('scene/fog');
stubComponent('scene/keyboard-shortcuts');
stubComponent('scene/pool');
stubComponent('scene/screenshot');
stubComponent('scene/stats');
stubComponent('scene/vr-mode-ui');

// creates rStats global
require('../../vendor/rStats');
