var ANode = require('./a-node');
var registerElement = require('./a-register-element').registerElement;

// TODO we only use a-assets as a container for NAF templates, it can be removed once we move those out
module.exports = registerElement('a-assets', {
  prototype: Object.create(ANode.prototype, {
    attachedCallback: {
      value: function () {
        this.load();
      }
    }
  })
});
