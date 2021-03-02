var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 },
];

function filter(list, predicate) {
    var new_list = [];
    for (var i=0, len = list.length; i<len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}

// 1. users중에 age가 30미만인 users[i]만 모아서 몇명인지를 출력한다.
// var temp_users = [];
// for (var i = 0, len = users.length; i < len; i++) {
//     if(users[i].age<30) temp_users.push(users[i]);
// }
// console.log(temp_users);
// console.log(temp_users.length);
// predicate
var users_under_30 = filter(users, function(user) { return user.age < 30 });
console.log(users_under_30); // 4

// 2. 그들의 나이만 다시 모아 출력한다.
var ages = [];
for (var i = 0, len = users_under_30.length; i < len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages); // [25, 28, 27, 24]

// 3. 나이가 30 이상인 temp_users가 몇 명인지를 출력한다.
// predicate
var users_over_30 = filter(users, function(user) { return user.age >= 30 });
console.log(users_over_30);
console.log(users_over_30.length); // 3

// 4. 그들의 이름만 다시 모아 출력한다.
var names = [];
for(var i = 0, len = users_over_30.length; i < len; i++) {
    names.push(users_over_30[i].name);
}
console.log(names); // ["ID","BJ","JM"]

// Memo
// filter 함수를 실행하면서 predicate 자리에 익명 함수를 정의해서 넘겼다. 익명 함수란, 말 그대로 이름이 없는 함수다.
// 첫 번째 익명 함수를 보면 user를 받아, user.age < 30일때 true를 리턴하고 있다. 이 익명 함수는 users.length만큼 실행될 것이므로
// 총 7번 실행되며 그중 4번은 true를, 3번은 false를 리턴한다. 이 익명함수가 코드 1-6의 filter함수와 어떻게 협업을 하는지 천천히 그려보자