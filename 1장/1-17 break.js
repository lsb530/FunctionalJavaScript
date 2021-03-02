const { users, filter, map, log_length, bvalue } = require('./functions');
let user;
for(var i=0, len=users.length;  i<len; i++) {
    if (users[i].id == 3) {
        user = users[i];
        break;
    }
}
console.log(user);
// Memo
// 원하는 user를 찾은 후 break로 for문을 빠져나왔다. 앞선 filte를 통해 찾은 것보다 훨씬 효율적이다.
// 하지만 위 코드는 재사용이 불가능하다.위 코드를 함수로 만들어서 재사용이 가능하도록 만들어보자.
// 아마 자주 본 함수일 것이다