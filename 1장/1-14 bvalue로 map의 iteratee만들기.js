var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 },
];

function filter(list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

function map(list, iteratee) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

function log_length(value) {
  console.log(value.length);
  return value;
}

function bvalue(key) {
  return function (obj) {
    return obj[key];
  };
}

console.log(
  log_length(
    map(
      filter(users, function (user) {
        return user.age < 30;
      }),
      bvalue('age'),
    ),
  ),
);

console.log(
  log_length(
    map(
      filter(users, function (user) {
        return user.age >= 30;
      }),
      // function (user) { return user.name; }
      bvalue('name'),
    ),
  ),
);

// Memo
// map이 사용할 iteratee 함수를 bvalue가 리턴한 함수로 대체했다. 익명 함수 선언이 사라져 코드가 더욱 짧아졌다.
// addMaker같은 패턴의 함수도 이처럼 실용적으로 사용된다. 생각보다 실용적이지 않은가?
// * bvalue에 b를 붙인 이유는 인자를 미리 부분적으로 bind해 둔 함수를 만들고 있음을 간결하게 표현한 것이다.
