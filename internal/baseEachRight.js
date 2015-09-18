import baseForOwnRight from './baseForOwnRight';
import createBaseEach from './createBaseEach';

/**
 * The base implementation of `_.forEachRight` without support for callback shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEachRight = createBaseEach(baseForOwnRight, true);

export default baseEachRight;
