const {readFileSync, writeFileSync} = require('fs');
//ou bien const fs = require ('fs');
//fs.readFiles
const fi = readFileSync('./content/first.txt', 'utf-8')
const se = readFileSync('./content/second.txt', 'utf-8')
console.log( fi , se);
writeFileSync('./content/write.txt',`here is the wroten text : ${fi} ,${se}`, {flag: 'a'})