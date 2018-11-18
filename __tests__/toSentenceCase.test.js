'use strict';

const toSentenceCase = require("../index");

describe('toSentenceCase', () => {
  it('should convert letters in sentences', () => {
    const orig = 'she\'s a cOOl person. dogs ARE loyal Friends! Aren\'t tHEy? pErIoD.';
    const answer = 'She\'s a cool person. Dogs are loyal friends! Aren\'t they? Period.';
    expect(toSentenceCase(orig)).toBe(answer);
  });

  it('should perserve other symbols', () => {
    const orig = '0 * 3 is 0.   and --- you get it? FuNny.';
    const answer = '0 * 3 is 0.   And --- you get it? Funny.';
    expect(toSentenceCase(orig)).toBe(answer);
  });
});
