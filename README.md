sentencecase
========================================

[![Build Status](https://travis-ci.org/franklingu/sentencecase.svg?branch=master)](https://travis-ci.org/franklingu/sentencecase)

Small and fast library to convert a paragraph to [sentence case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).

### Installation

~~~
$ npm install --save sentencecase
~~~

or

~~~
$ yarn add sentencecase
~~~

### Usage

~~~
const toSentenceCase = require("../index");
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