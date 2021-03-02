// 기존 코드
/*
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if(users[i].age<30) temp_users.push(users[i]);
}
console.log(temp_users_length); // 4
 */

// 바꾼 코드
function filter(list, predicate) {
    var new_list = [];
    for (var i=0, len = list.length; i<len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}
// Memo
// filter 함수는 인자로 list와 predicate 함수를 받는다. 루프를 돌며 list의 i번째의 값을 predicate에게 넘겨준다.
// predicate 함수는 list.length만큼 실행되며, predicate 함수의 결과가 참일때만 new_list.push를 실행한다.
// new_list.push가 실행될지 여부를 predicate 함수에게 완전히 위임한 것이다. filter함수는 predicate 함수 내부에서 어떤 일을 하는지
// 모른다. id를 조회할지 age를 조회할지 어떤 조건을 만들지는 filter는 전혀 모른다. 오직 predicate의 결과에만 의존한다
// 마지막에는 new_list를 리턴한다. 이름을 new_라고 붙였는데 이는 함수형 프로그래밍 관점에서 굉장히 상징적인 부분이다.
// 이전 값의 상태를 변경하지 않고(조건에 맞지 않는 값을 지운다거나 하지 않고) 새로운 값을 만드는 식으로 값을 다루는 것은 함수형
// 프로그래밍의 매우 중요한 콘셉트 중 하나이다.