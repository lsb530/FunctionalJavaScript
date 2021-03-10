// 1. f1은 함수를 값으로 다룰 수 있음을 보여준다. typeof 연산자를 사용하여 'function'인지 확인하고 변수 a에 f1을 담고있다.
function f1() {}
const a = typeof f1 === 'function' ? f1 : function() {};
console.log(a);

// 2. f2는 함수를 리턴한다.
function f2() {
    return function() {};
}
console.log(f2);

// 3. a와 b를 더하는 익명 함수를 선언하였으며, a와 b에 각각 10, 5를 전달하여 즉시 실행했다.
// (function(a, b) { return a + b; })(10, 5);
(function(a, b) { return a + b; })(10, 5);
console.log((function(a, b) { return a + b; })(10, 5));

// 4. callAndAdd를 실행하면서 익명 함수들을 선언했고 바로 인자로 사용되었다. callAndadd는 넘겨받은 함수 둘을 실행하여
//     결과들을 더한다.
function callAndAdd(a, b) {
    return a() + b();
}
callAndAdd(function() { return 10; }, function() { return 5;});
console.log(callAndAdd(function() { return 10; }, function() { return 5;}));