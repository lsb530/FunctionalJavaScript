const { users, filter, map, log_length, bvalue } = require('./functions');
function User(id, name, age) {
    this.getId = function () {
        return id;
    }
    this.getName = () => name;
    this.getAge = () => age;
}
const users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24),
]
function find(list, predicate) {
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i])) return list[i];
    }
}
console.log(find(users2, function(u) { return u.getAge() == 25; }).getName()); // HA
console.log(find(users, function(u) { return u.name.indexOf('P') !== -1; }));
console.log(find(users, function(u) { return u.age === 32 && u.name === 'JM';}));
console.log(find(users2, function (u) { return u.getAge() < 30; }).getName());