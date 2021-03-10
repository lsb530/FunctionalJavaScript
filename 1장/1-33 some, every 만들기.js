const { myUnderScore : ms} = require('./functions');
console.log(ms.some([0, null, 2])); // true
console.log(ms.some([0, null, false])); // false
console.log(ms.every([0, null, 2])); // false
console.log(ms.every([{}, true, 2])); // true
/* Memo
some은 배열에 들어있는 값 중 하나라도 긍정적인 값이 있으면 true를, 하나도 없다면 false를 리턴한다.
every는 모두 긍정적인 값이어야 true를 리턴한다. some, every는 if나 predicate 등과 함께 사용할 대 매우 유용하다.
그런데 1-33의 every는 좀 아쉬운 점이 있다. filter를 사용했기 때문에 항상 루프를 끝까지 돌게한다. 정말 쓸모없어 보이지만
함수 두 개를 만들면 로직을 개선할 수 있다.
 */