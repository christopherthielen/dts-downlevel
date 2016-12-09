module.exports = [

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
