const users = [
    { id: 1, name: 'ID', age: 32 },
    { id: 2, name: 'HA', age: 25 },
    { id: 3, name: 'BJ', age: 32 },
    { id: 4, name: 'PJ', age: 28 },
    { id: 5, name: 'JE', age: 27 },
    { id: 6, name: 'JM', age: 32 },
    { id: 7, name: 'HI', age: 24 },
];

const users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24),
];

function filter(list, predicate) {
    const new_list = [];
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;

}
function map(list, iteratee) {
    const new_list = [];
    for (let i = 0, len = list.length; i < len; i++) {
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
function User(id, name, age) {
    this.getId = function () {
        return id;
    }
    this.getName = () => name;
    this.getAge = () => age;

}
function find(list, predicate) {
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i])) return list[i];
    }
}

function object(key, val) {
    const obj = {};
    obj[key] = val;
    return obj;
}
function match(obj, obj2) {
    for (let key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2, val) {
    if (arguments.length === 2) obj2 = object(obj2, val);
    return function(obj) {
        return match(obj, obj2);
    }
}
function findIndex(list, predicate) {
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i])) return i;
    }
    return -1;
}
// exports.filter = filter;
module.exports = {users, users2, filter, map, log_length, bvalue, find, object, match, bmatch, findIndex};