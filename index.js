function composeFilter() {
  var filterArguments = arguments;
  return function(target) {
    for (var i = 0; i < filterArguments.length; i++) {
      if (filterArguments[i](target)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = composeFilter;
