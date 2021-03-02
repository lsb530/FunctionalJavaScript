// 기존 코드
/*
var ages = [];
for (var i=0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages);

var names = [];
for (var i=0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name);
}
console.log(names);
 */

// 바꾼 코드
function map(list, iteratee) {
    var new_list = [];
    for(var i=0, len = list.length; i<len; i++) {
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}
// Memo
// 이번에도 기존에 중복되었떤 코드와 거의 동일하며 아주 약간만 고쳤다.
// new_list에 무엇을 push할지에 대해 iteratee 함수에게 위임했다.