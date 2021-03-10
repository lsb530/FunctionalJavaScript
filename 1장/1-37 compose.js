/*
함수를 쪼갤수록 함수 합성은 쉬워진다. 다음은 다양한 함수 합성 기법 중 하나인 Underscore.js의 compose다.
compose는 오른쪽의 함수의 결과를 바로 왼쪽의 함수에게 전달한다. 그리고 해당 함수의 결과를 다시 자신의 왼쪽의 함수에게 전달하는
고차 함수다. 코드 1-37은 Underscore.js 사이트에 있는 예제와 Underscore.js 내부의 코드다.
    arguments, apply, call 객체 등이 익숙하다면 compose 함수의 코드를 읽는 것이 크게 어렵지 않을 것이다.
arguments 객체는 함수형 자바스크립트를 다루다보면 자주 만나게 된다. arguments 객체가 익숙하지 않은 개발자는 굳이
compose를 자세히 읽을 필요는 없다. 여기서는 compose의 용도가 무엇인지만 알아두면 마지막 예제를 이해할 수 있다.
 */
const compose = function() {
    const args = arguments;
    const start = arguments.length-1;
    return function() {
        let i = start;
        let result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

const greet = function(name) { return `hi: ${name}`;}
const exclaim = function(statement) { return statement.toUpperCase() + "!"; };
const welcome = compose(greet, exclaim);
console.log(welcome("moe")); // 'hi: MOE!'

function test(...x) {
    console.log(x);
    console.log(arguments);
    console.log(x.length);
}
// test([1,'하하','x'],['아아아아아']);

/* Memo
welcome을 실행하면 먼저 exclaim을 실행하면서 "moe"를 인자로 넘겨준다.
exclaim의 결과는 대문자로 변환된 "MOE!"이고 그 결과는 다시 greet의 인자로 넘어가 최종 결과로 "hi: MOE!"를 리턴한다.
 */