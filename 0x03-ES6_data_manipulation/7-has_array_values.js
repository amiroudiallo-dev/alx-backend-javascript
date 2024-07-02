/**
 * Retrieves a boolean if all the elements in the array exist within the set.
 * @param {Set} set.
 * @param {Array} array.
 * @author <https://github.com/amiroudiallo-dev>
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
