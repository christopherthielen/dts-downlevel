#! /usr/bin/env node
var replaceInFile = require('replace-in-file');
var globs = process.argv.slice(2);
globs = globs.length ? globs : ["**/*.d.ts"];

var rules = require('./rules');

rules.forEach(rule => {
  var cmd = {
    from: rule.replace,
    to: rule.with,
    files: globs,
  };

  var results = replaceInFile.sync(cmd);

  if (results.length) {
    console.log("Rule: " + rule.doc);
    results.forEach(result => console.log("<- Modified: " + result));
  }
});

