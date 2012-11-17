var each = require('each');
module.exports = function(obj) {
  each(Array.prototype.slice.call(arguments, 1), function(source) {
    for (var prop in source) {
      obj[prop] = source[prop];
    }
  });
};
