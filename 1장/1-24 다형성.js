const { users, filter, map, log_length, bvalue, users2 } = require('./functions');
console.log(users);
console.log(
    map(
        filter(users, function(u) { return u.age >= 30}),
        function(u) { return u.name; }
    )
); // [ 'ID' ,'BJ', 'JM' ]
// console.log(map(
//     filter(users2, function(u) { return u.getAge() > 30}), // 메서드 실행으로 변경
//     function(u) { return u.getName(); } // 메서드 실행으로 변경
// ));
console.log(map(
    filter(users2, u => u.getAge() > 30), // 메서드 실행으로 변경
    u => u.getName() // 메서드 실행으로 변경
));
// console.log(users2);