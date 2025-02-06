/**
 * Generates an infinite sequence of incrementing numbers starting from a specified value.
 * @param {number} start - The initial number to start generating IDs from.
 * @yields {number} The next incremental number in the sequence.
 */
export function* idGenerator(start = 1) {
  let i = start;

  while (true) {
    yield i;
    i++;
  }
}

/**
 * Truncates a string to a specified limit and appends "..." if the string exceeds the limit.
 * @param {string} string - The input string that you want to limit in terms of length.
 * @param {number} limit - The maximum length that the input `string` should be truncated to.
 * @returns {string} The truncated string or the original string if length is below the limit.
 */
export const StringLimit = (string, limit) => {
  if (string.length > limit) {
    return `${string.substring(0, limit - 3)}...`;
  }
  return string;
};

/**
 * Checks if an array is empty without using the length property.
 *
 * @param {Array|undefined} array - The array to check for emptiness.
 * @returns {boolean} Returns true if the array is empty, false otherwise.
 */
export const isEmptyArray = (array) => {
  if (array === undefined) return true;
  for (let _ in array) return false;
  return true;
};

/**
 * Checks if an object is empty by verifying its keys.
 *
 * @param {Object|undefined} obj - The object to check for emptiness.
 * @returns {boolean} Returns true if the object is empty, false otherwise.
 */
export const isEmptyObject = (obj) => {
  if (obj === undefined) return true;
  for (let key in obj) {
    if (key) {
      return false;
    }
  }
  return true;
};
