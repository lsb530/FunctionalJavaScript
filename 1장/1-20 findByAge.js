const { users, filter, map, log_length, bvalue } = require('./functions');
function findByAge(list, age) {
    for(let i=0,len=list.length; i<len; i++) {
        if(list[i].age == age) return list[i];
    }
}
console.log(findByAge(users, 28));
console.log(findByAge(users, 25));
// Memo
// 위와 같은 방식은 그동안 많이 사용해 온 방식이다.for와  if 등의 로직이 숨겨졌고 깔끔해졌지만 아직 아쉬움이 있다.
// 일단 findById, findByName, findByAge 사이에 중복이 있다는 점이 아쉽다.
// 결론적으로 얘기하면 이 함수들은 함수형적이지 않다.