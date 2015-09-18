import toInteger from '../lang/toInteger';

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function(number, precision) {
    precision = precision ? toInteger(precision) : 0;
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (+number + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (value + 'e').split('e');
      return +(pair[0] + 'e' + (pair[1] - precision));
    }
    return func(number);
  };
}

export default createRound;
