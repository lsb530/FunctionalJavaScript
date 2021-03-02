// 코드 1-1
// addMaker: 함수를 값으로 다루는 함수이다.
function addMaker(a) {
    this.name = 'xxx';
    return function(b) {
        return a+b;;
    }
}
addMaker(10)(5); // 15
console.log(addMaker(10)(5));

// 코드 1-2
// addMaker로 만든 함수
const add5 = addMaker(5);
console.log(add5(3));
console.log(add5(4));

// 코드1-3
// 값으로서의 함수
var v1=100;
var v2=function () {};
function f1() { return 100; }
function f2() { return function () {}; }
console.log(f1());
console.log(f2());

// 코드1-4
// 값으로써의 함수와 클로저
var add3 = addMaker(3);
add3(3); //6
add3(4); //7
console.log(add3(3));
console.log(add3(4));