const { myUnderScore: ms } = require('./functions');
// const t = new ms();
console.log(ms.filter([1, 2, 3, 4], function(val, idx) {
    return idx > 1;
})); // [3, 4];
console.log(ms.filter([1, 2, 3, 4], function(val, idx) {
    return idx % 2 === 0;
})); // [1, 3];

// ms.cl(ms.filter([1, 2, 3, 4], function(val, idx) {
//     return idx > 1;
// })); // [[3, 4]];
