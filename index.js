/**
 * Convert a paragraph to sentence case.
 *
 * The function only deals with English letters'
 *  case conversions and preserves others as
 *  they are.
 */

'use strict';

function toSentenceCase(text) {
  return text
    .split(/(\S.+?[.!?])(?=\s+|$)/)
    .filter(sentence => sentence.length > 0)
    .map(sentence => {
      return (
        sentence.charAt(0).toUpperCase() + sentence.substr(1).toLowerCase()
      );
    })
    .join('');
}

module.exports = toSentenceCase;
