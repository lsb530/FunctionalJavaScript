const { users, filter, map, log_length, bvalue } = require('./functions');
function findBy(key, list, val) {
    for(let i=0,len=list.length;i<len;i++) {
        if(list[i][key] === val) return list[i];
    }
}
console.log(findBy('name', users,'BJ'));
console.log(findBy('id', users,2));
console.log(findBy('age', users,28));
// Memo
// 코드가 1/3로 줄었다. 아니 정확히 말하면 앞으로의 코드도 줄였다.
// findBy함수는 users, posts,comments, products 등 key로 value를 얻을 수 있는 객체들을 가진 배열이라면 무엇이든 받을 수 있다.
// 객체의 key 값이 무엇이든지간에 찾아줄 수 있으므로 훨씬 많은 경우를 대응할 수 있는 함수가 되었다.
// 좋아지긴 했지만 아직 다음과 같은 상황을 지원하지 못하는 아쉬움이 있다.
    // 1. key가 아닌 메서드를 통해 값을 얻어야 할때
    // 2. 두 가지 이상의 조건이 필요할 때
    // 3. ===이 아닌 다른조건으로 찾고자 할때