import createPadding from '../internal/createPadding';
import toString from '../lang/toString';

/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padLeft('abc', 6);
 * // => '   abc'
 *
 * _.padLeft('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padLeft('abc', 3);
 * // => 'abc'
 */
function padLeft(string, length, chars) {
  string = toString(string);
  return createPadding(string, length, chars) + string;
}

export default padLeft;
