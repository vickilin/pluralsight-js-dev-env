// this file isn't trnaspiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpck features that Mocha doesn't understand
require.extensions['.css'] = function(){};