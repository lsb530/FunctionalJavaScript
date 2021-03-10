const { myUnderScore : ms } = require('./functions');
const a = 10;
console.log(ms.identity(a)); // 10
/*
함수를 정의하고 실행해 보았다. 받은 인자를 그냥 그대로 내뱉는 함수다. 나는 이미 a가 10인걸 알고있는데,
identity같은 아무런 기능이 없는 함수는 대체 언제 사용해야 하는걸까?
*/