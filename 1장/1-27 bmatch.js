const { users, filter, map, log_length, bvalue, users2, find } = require('./functions');
function object(key, val) {
    const obj = {};
    obj[key] = val;
    return obj;
}
function match(obj, obj2) {
    for (let key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2, val) {
    if (arguments.length === 2) obj2 = object(obj2, val);
    return function(obj) {
        return match(obj, obj2);
    }
}

console.log(users);
console.log(
    match(find(users, bmatch('id', 3)), find(users, bmatch('name', 'BJ')))
); // true

console.log(
    find(users, function(u) { return u.age === 32 && u.name === 'JM'})
); // { id: 6, name: 'JM', age: 32 }

console.log(
    find(users, bmatch({ id: 6, name: 'JM', age: 32 } ))
); // { id: 6, name: 'JM', age: 32 }

// Memo
// 이제는 (key, val)와 ({key:val}) 두 가지 방식으로 사용할 수 잇다. ({key:val})방식을 사용하면 두 가지 이상의 값이 모두 동일한지도
// 확인할 수 있다. bmatch1을 bmatch로 발전시키면서 유용한 함수인 match와 object도 만들어졌다.
// 이처럼 작은 기능을 하는 함수로 쪼개거나 재조합하는 식으로 코드를 발전시키는 것도 좋은 방법이다.