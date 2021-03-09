const { users, filter, map, log_length, bvalue, users2, find } = require('./functions');
function bmatch1(key, val) {
    return function(obj) {
        return obj[key] === val;
    }
}
console.log(users);
console.log(filter(users, bmatch1('age', 32)));
// [
//     { id: 1, name: 'ID', age: 32},
//     { id: 3, name: 'BJ', age: 32},
//     { id: 6, name: 'JM', age: 32},
// ]
console.log(map(users, bmatch1('age', 32)));
// [
//     true,  false,
//     true,  false,
//     false, true,
//     false
// ]
// Memo
// bamtch1은 하나의 key에 대한 value만 비교할 수 있다. 여러 개의 key에 해당하는 value들을 비교하는 함수를 만들어보자