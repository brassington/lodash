/**
 * The base implementation of `_.sortedUniqBy` without support for callback
 * shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniqBy(array, iteratee) {
  var index = 0,
      length = array.length,
      value = array[0],
      computed = iteratee ? iteratee(value) : value,
      seen = computed,
      resIndex = 0,
      result = [value];

  while (++index < length) {
    value = array[index],
    computed = iteratee ? iteratee(value) : value;

    if ((seen === seen ? (seen !== computed) : (computed === computed))) {
      seen = computed;
      result[++resIndex] = value;
    }
  }
  return result;
}

export default baseSortedUniqBy;
