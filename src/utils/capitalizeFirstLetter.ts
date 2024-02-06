/**
 * Capitalizes the first letter of a given word.
 *
 * @param {string} word - The word to capitalize.
 * @returns {string} The word with the first letter capitalized.
 */

export const capitalizeFirstLetter = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);
