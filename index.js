#! /usr/bin/env node
const replaceInFile = require('replace-in-file');
const semver = require('semver');
const yargs = require('yargs')
    .option('semver', {
      description: 'The semver typescript version being targeted',
      default: '>=3.0.0',
      required: true,
    }).argv;

const args = yargs._;
const globs = args.length ? args : ["**/*.d.ts"];

const rules = require('./rules')
    .filter(rule => semver.satisfies(rule.introduced, yargs.semver));

rules.forEach(rule => {
  const cmd = {
    from: rule.replace,
    to: rule.with,
    files: globs,
  };

  const results = replaceInFile.sync(cmd);

  if (results.length) {
    console.log(`dts-downlevel: ${rule.doc}`);
    results.forEach(result => console.log("<- dts-downlevel modified: " + result));
  } else {
    console.log(`dts-downlevel: ${rule.doc} (no matches)`);
  }
});

