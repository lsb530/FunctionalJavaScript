var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 },
];
// 1. users중에 age가 30미만인 users[i]만 모아서 몇명인지를 출력한다.
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if(users[i].age<30) temp_users.push(users[i]);
}
console.log(temp_users);
console.log(temp_users.length);

// 2. 그들의 나이만 다시 모아 출력한다.
var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages); // [25, 28, 27, 24]

// 3. 나이가 30 이상인 temp_users가 몇 명인지를 출력한다.
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age>=30) temp_users.push(users[i]);
}
console.log(temp_users);
console.log(temp_users.length); // 3

// 4. 그들의 이름만 다시 모아 출력한다.
var names = [];
for(var i = 0, len = temp_users.length; i < len; i++) {
    names.push(temp_users[i].name);
}
console.log(names); // ["ID","BJ","JM"]

// MEMO 리팩토링해보자
// 중복되는 부분인 1과 3의 for문에서 users를 돌며 특정 조건의 users[i]를 새로운 배열에 담고 있는데, if문의 조건절 부분을 제외하고는
// 모두 동일한 코드를 갖고 있다. 한 번은 .age<30, 한번은 .age >= 30으로 다를 뿐 그 외 부분은 모두 동일하다. 어떻게 중복을 제거해야 할까?
// 30 부분은 변수로 바꿀 수 있겠지만 .age, <, >= 등은 쉽지 않아보인다. 이럴때 함수를 활용하면 이런 부분까지도 쉽게 추상화할 수 있다