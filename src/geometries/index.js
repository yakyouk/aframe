var registerGeometry = require('../core/geometry').registerGeometry;

function stubGeometry (name) {
  registerGeometry(name, {
    init () {
      console.warn(`The ${name} aframe geometry no longer exists.`);
    }
  });
}

stubGeometry('box');
stubGeometry('ircle');
stubGeometry('one');
stubGeometry('ylinder');
stubGeometry('odecahedron');
stubGeometry('cosahedron');
stubGeometry('ctahedron');
stubGeometry('lane');
stubGeometry('ing');
stubGeometry('phere');
stubGeometry('etrahedron');
stubGeometry('orus');
stubGeometry('orusKnot');
stubGeometry('riangle');
