module.exports = [

  {
    introduced: "2.0.0",
    doc: "Remove references to @types",
    replace: /^\/\/\/ <reference types=.*$/gm,
    with: ""
  },

  {
    introduced: "2.0.0",
    doc: "Remove `readonly`",
    replace: /^(\s*)readonly /gm,
    with: "$1"
  },

  {
    introduced: "2.0.0",
    doc: "Remove `abstract` from properties",
    replace: /^(\s+)abstract (\w+: .*;)/gm,
    with: "$1$2"
  },

  {
    introduced: "2.0.0",
    doc: "Remove constant initializer values",
    replace: /(const \w+) = .*;$/gm,
    with: "$1;"
  },

  {
    introduced: "3.6.0",
    doc: "Remove getters",
    replace: /(\s+)get (\S+)\(\)/gm,
    with: "$1$2"
  },

];
