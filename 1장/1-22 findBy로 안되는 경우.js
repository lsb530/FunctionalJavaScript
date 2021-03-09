const { users, filter, map, log_length, bvalue } = require('./functions');
function User(id, name, age) {
    this.getId = function () {
        return id;
    }
    this.getName = () => name;
    this.getAge = () => age;
}
const users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24),
];
function findBy(key, list, val) {
    for(let i=0,len=list.length;i<len;i++) {
        if(list[i][key] === val) return list[i];
    }
}
console.log(findBy('age',users2,25));
console.log(users2[0].getId(),users2[0].getName(),users2[0].getAge());
// Memo
// 코드 1-22를 보면 user의 나이를 .getAge()로 얻어내야 하기 때문에 findBy 함수로는 위 상황을 대응할 수 없음을 알 수 있다.
// 이름에 'P'가 포함된 user를 찾고싶다거나 나이가 32이면서 이름이 'JM'인 user를 찾고 싶다거나 하는 것도 불가능하다.
// 나이가 30세미만인 사람을 찾는 것도 findBy로는 할 수 없다. 이번엔 보다 함수적인 프로그래밍을 해 보자