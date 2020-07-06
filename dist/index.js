function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Interface(_ref) {
  var model = _ref.model,
      lib = _ref.lib;

  if (typeof model !== "object") {
    return null;
  }

  var iterate = function iterate(model) {
    return model.map(function (e) {
      var element = e.element,
          properties = e.properties,
          content = e.content;
      return React.createElement(lib[element], _extends({}, properties), typeof content === 'object' ? iterate(content) : content);
    });
  };

  var Tree = iterate(model);
  return React.createElement("div", null, Tree);
}

exports.Interface = Interface;
//# sourceMappingURL=index.js.map
