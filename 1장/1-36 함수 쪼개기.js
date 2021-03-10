const mf = require('./fix_func');
// const { users, users2, log_length, bvalue, filter, map, find, object, match, bmatch, findIndex, some, every } = require('./fix_func');
console.log(mf.some([0, null, 2])); // true
console.log(mf.some([0, null, false])); // false
console.log(mf.every([0, null, 2])); // false
console.log(mf.every([{}, true, 2])); // true