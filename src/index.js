// WebVR polyfill
// Check before the polyfill runs.
window.hasNativeWebVRImplementation = !!window.navigator.getVRDisplays ||
                                      !!window.navigator.getVRDevices;

window.hasNativeWebXRImplementation = !!navigator.xr;

var utils = require('./utils/');
var debug = utils.debug;

var error = debug('A-Frame:error');
var warn = debug('A-Frame:warn');

if (window.document.currentScript && window.document.currentScript.parentNode !==
    window.document.head && !window.debug) {
  warn('Put the A-Frame <script> tag in the <head> of the HTML *before* the scene to ' +
       'ensure everything for A-Frame is properly registered before they are used from ' +
       'HTML.');
}

// Error if not using a server.
if (window.location.protocol === 'file:') {
  error(
    'This HTML file is currently being served via the file:// protocol. ' +
    'Assets, textures, and models WILL NOT WORK due to cross-origin policy! ' +
    'Please use a local or hosted server: ' +
    'https://aframe.io/docs/0.5.0/introduction/getting-started.html#using-a-local-server.');
}

require('present'); // Polyfill `performance.now()`.

// CSS.
if (utils.device.isBrowserEnvironment) {
  require('./style/aframe.css');
  require('./style/rStats.css');
}

// Required before `AEntity` so that all components are registered.
var AScene = require('./core/scene/a-scene').AScene;
var components = require('./core/component').components;
var registerComponent = require('./core/component').registerComponent;
var registerSystem = require('./core/system').registerSystem;
var systems = require('./core/system').systems;
// Exports THREE to window so three.js can be used without alteration.
var THREE = window.THREE = require('./lib/three');

var pkg = require('../package');

require('./components/index'); // Register standard components.

var ANode = require('./core/a-node');
var AEntity = require('./core/a-entity'); // Depends on ANode and core components.

require('./core/a-assets');
require('./core/a-mixin');

console.log('A-Frame Version: https://github.com/MozillaReality/aframe');
console.log('three Version: https://github.com/MozillaReality/three.js');
console.log('WebVR Polyfill Version:', pkg.dependencies['webvr-polyfill']);

module.exports = window.AFRAME = {
  AComponent: require('./core/component').Component,
  AEntity: AEntity,
  ANode: ANode,
  AScene: AScene,
  components: components,
  coreComponents: Object.keys(components),
  registerComponent: registerComponent,
  registerElement: require('./core/a-register-element').registerElement,
  registerSystem: registerSystem,
  scenes: require('./core/scene/scenes'),
  schema: require('./core/schema'),
  systems: systems,
  THREE: THREE,
  utils: utils,
  version: 'hubs/master'
};
