const { myUnderScore : ms, filter } = require('./functions');
console.log(filter([true, 0, 10, 'a', false, null], ms.identity));
// [true, 10, 'a']
/*
filter를 identity와 함께 사용했더니 Truthy Values(Boolean으로 평가했을때 true로 평가되는 값들)만 남았다.
이렇게 놓고 보니 identity가 생각보다 실용적으로 보인다. identity를 다른 고차 함수와 조합하는 식으로 코드 1-33과 같은 유용한
함수를 만들 수 있다.
 */
/* Memo 참고
false, undefined, null, 0, NaN, ""은 모두 Boolean으로 평가했을 때 false다.
이것들은 모두 Falsy Values다. Falsy Values가 아닌 모든 값들은 Truthy Values다.
_.falsy = function(v) { return !v; }
_.truthy = function(v) { return !!v; }
 */