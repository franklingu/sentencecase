sentencecase.js
========================================

[![Build Status](https://travis-ci.org/franklingu/sentencecase.svg?branch=master)](https://travis-ci.org/franklingu/sentencecase)
[![Coverage](https://codecov.io/gh/franklingu/sentencecase/branch/master/graph/badge.svg)](https://codecov.io/gh/franklingu/sentencecase)
[![NPM version][https://img.shields.io/npm/v/sentence-case.svg?style=flat]][https://npmjs.org/package/sentencecase.js]
[![NPM downloads][https://img.shields.io/npm/dm/sentence-case.svg?style=flat]][https://npmjs.org/package/sentencecase.js]

Small and fast library to convert a paragraph to [sentence case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

### Installation

~~~
$ npm install --save sentencecase.js
~~~

or

~~~
$ yarn add sentencecase.js
~~~

### Usage

~~~
const toSentenceCase = require("sentencecase.js");
const paragraph = 'she\'s a cOOl person. dogs ARE loyal Friends! Aren\'t tHEy? pErIoD.';
console.log(toSentenceCase(paragraph));
// She's a cool person. Dogs are loyal friends! Aren't they? Period.
~~~

### Testing

~~~
npm test
~~~

or

~~~
yarn test
~~~

### LICENSE

[MIT](./LICENSE)
