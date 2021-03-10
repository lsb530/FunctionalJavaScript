const { myUnderScore : ms } = require('./functions');
console.log(ms.some([0, null, 2])); // true
console.log(ms.some([0, null, false])); // false
console.log(ms.every([0, null, 2])); // false
console.log(ms.every([{}, true, 2])); // true
/*
not은 연산자 !가 아닌 함수이기때문에 findIndex와 함께 사용할 수 있다.
list의 값 중 하나라도 부정적인 값을 만나면 predicate가 not이므로 true를 리턴하여
해당번재 i값을 리턴하게된다. 중간에 부정적인 값을 한번이라도 만나면 루프가 중단된다.
만일 부정적인 값이 하나도 없다면 -1을 리턴한다. -1이 나왔다면, beq(-1)이 리턴한 함수에게 인자로 넣어
true가 나올 것이고, 이것은 every의 리턴값이 된다. findIndex로 부정적인 값을 하나도 찾지 못했다는 얘기는
모두 긍정적인 값이라는 얘기가 된다.
every는 쓸모없어보이는 정말 작은함수 not 덕분에 로직이 개선되었다. 좀 더 함수를 쪼개보자.
함수가 가능하면 한 가지 일만 하게끔 말이다.
 */