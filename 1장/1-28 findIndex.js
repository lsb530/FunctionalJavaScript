// 이번엔 코드를 조금만 고쳐서 새로운 함수를 만들어보자. find를 조금만 고치면 값 비교만 하는 Array.prototype.indexOf보다
// 활용도가 훨씬 높은 findIndex를 만들 수 있다.
const { users, users2, filter, map, log_length, bvalue, find, object, match, bmatch, findIndex} = require('./functions');
// function findIndex(list, predicate) {
//     for(let i=0, len=list.length; i<len; i++) {
//         if(predicate(list[i])) return i;
//     }
//     return -1;
// }
console.log(users);
console.log(findIndex(users, bmatch({name: 'JM', age: 32}))); // 5
console.log(findIndex(users, bmatch({age:36}))); // -1