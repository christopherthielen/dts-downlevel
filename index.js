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

  {
    doc: "Remove `abstract` from properties",
    replace: /^(\s+)abstract (\w+: .*;)/gm,
    with: "$1$2"
  },
  {
    doc: "Remove constant initializer values",
    replace: /(const \w+) = .*;$/gm,
    with: "$1;"
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

