// const Func = require('./functions');
const { users, filter, map, log_length, bvalue } = require('./functions');
console.log(filter(users, function(user) { return user.id == 3 })[0]);
// Memo
// filter를 통해 걸러낸 후 [0]으로 user를 얻어냈고 원하는 결과가 나오긴 했다.
// filter를 사용하여 찾을 수 있지만 filter함수는 무조건 list.length만큼 predicate가 실행되기 때문에 효율적이지 못하고,
// 동일 조건에 값이 두 개 이상이라면 두 개 이상의 값을 찾는다. => 비효율