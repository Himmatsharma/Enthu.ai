let franc = require('franc');
let langs = require('langs');
let input = process.argv[2];
let langCode = franc(input);

let language = where("3", langCode);

console.log(language.name);