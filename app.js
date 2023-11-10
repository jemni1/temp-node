const lo = require('lodash')
const items = [1,[2]]
const ne = lo.flattenDeep(items)
console.log(ne);
