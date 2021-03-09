const { users, filter, map, log_length, bvalue, users2, find } = require('./functions');
function bmatch1(key, val) {
    return function(obj) {
        return obj[key] === val;
    }
}
console.log(find(users, bmatch1('id', 1)));
console.log(find(users, bmatch1('name', 'HI')));
console.log(find(users, bmatch1('age', 27)));
// memo
// bmatch1의 실행 결과는 함수다. key와 val을 미리 받아서 나중에 들어올 obj와 비교하는 익명 함수를 클로저로 만들어 리턴한다.
// bmatch1을 통해 id, name, age를 비교하는 predicate 3개를 만들어 find에게 넘겼다. 짧고 간결하다.
// bmatch1은 함수를 리턴하기때문에 filter나 map과도 조합이 가능하다. 인자와 결과만으로 협업하기 때문에 여기저기 붙이기 쉽다.