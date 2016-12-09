#! /usr/bin/env node
var replaceInFile = require('replace-in-file');
var globs = process.argv.slice(2);
globs = globs.length ? globs : ["**/*.d.ts"];

var replacements = [

  {
    doc: "Remove references to @types",
    replace: /^\/\/\/ <reference types=.*$/gm,
    with: ""
  },

  {
    doc: "Remove `readonly`",
    replace: /^(\s*)readonly /gm,
    with: "$1"
  },

];

replacements.forEach(rule => {
  var cmd = {
    replace: rule.replace,
    with: rule.with,
    files: globs,
  };

  var results = replaceInFile.sync(cmd);

  if (results.length) {
    console.log("Rule: " + rule.doc);
    results.forEach(result => console.log("<- Modified: " + result));
  }
});

