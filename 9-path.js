const { log } = require('console')
const path = require('path')
const file = path.join('/path.js')
console.log (file)

console.log (path.basename(file))

const pa = path.resolve(__dirname,'/path.js')
console.log(pa);