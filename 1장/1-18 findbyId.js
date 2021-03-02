const { users, filter, map, log_length, bvalue } = require('./functions');
function findById(list, id) {
    for (let i=0, len=list.length;i<len; i++) {
        if (list[i].id == id) return list[i];
    }
}
console.log(findById(users, 3));
console.log(findById(users, 5));
console.log(findById(users, 30));
// Memo
// findById는 list와 id를 받아 루프를 돌다가 id가 동일한 객체를 만나면 그 값을 리턴한다.
// 동시에 함수도 종료되고 for문도 멈춘다. 만일 못찾는다면 기본 리턴값인 undefined가 리턴된다.