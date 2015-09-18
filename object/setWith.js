import baseSet from '../internal/baseSet';

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(nsValue) {
 *   if (!_.isObject(nsValue)) {
 *     return {};
 *   }
 * }
 *
 * _.setWith({ '0': { 'length': 2 } }, '[0][1][2]', 3, customizer);
 * // => { '0': { '1': { '2': 3 }, 'length': 2 } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

export default setWith;
