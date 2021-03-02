// 1.1의 addMaker
function addMaker(a) {
    return function(b) {
        return a + b;
    }
}

function bvalue(key) {
    return function(obj) {
        return obj[key];
    }
}
console.log(addMaker(3)(5));

bvalue('a')({a: 'hi', b: 'hello'}); //hi
console.log(bvalue('a')({a: 'hi', b: 'hello'}));
// Memo
// bvalue를 실행할 때 넘겨준 인자 key를 나중에 obj를 받을 익명 함수가 기억한다(클로저가 된다)
// bvalue의 실행 결과는 key를 기억하는 함수이고 이 함수에는 key/value 쌍으로 구성된 객체를 인자로 넘길 수 있다.
// 이 함수는 obj를 받아 앞서 받아 두었던 key로 value값을 리턴한다. 위에서는 a를 기억해두었다가 넘겨진 객체의 obj['a']에
// 해당하는 결과를 리턴한다