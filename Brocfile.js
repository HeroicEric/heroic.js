// var esTranspiler = require('broccoli-babel-transpiler');
// var scriptTree = esTranspiler(trees, options);
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');

var someFiles = funnel('app', {
  files: ['index.html']
});

module.exports = mergeTrees([someFiles]);
