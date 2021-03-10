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
////////////////////////////////////

function cl(...data) {
    console.log(data);
}

function map(list, iterate) {
    const new_list = [];
    for(let i=0, len=list.length; i<len; i++) {
        new_list.push(iterate(list[i], i, list));
    }
    return new_list;
}

function filter(list, predicate) {
    const new_list = [];
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i], i, list)) new_list.push(list[i]);
    }
    return new_list;
}

function find(list, predicate) {
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i], i, list)) return list[i];
    }
}

function findIndex(list, predicate) {
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i], i, list)) return i;
    }
    return -1;
}

// Truthy Values만을 반환하는 함수
function identity(v) { return v; }

// // 배열에 들어있는 값 중 하나라도 긍정적인 값이 있으면 true, 아니면 false
// function some(list) {
//     // return !!find(list, this.identity);
//     return not(not(positive(list)));
// }
//
// // 배열에 들어있는 모든 값이 긍정이면 true, 아니면 false
// function every(list) {
//     // return filter(list, this["identity"]).length === list.length;
//     return beq(-1)(negativeIndex(list));
// }

function some() {
    return compose(not, not, positive);
}

function every() {
    return compose(beq(-1), negativeIndex);
}

function not(v) { return !v; };

function beq(a) {
    return function(b) {
        return a === b;
    }
}

function positive(list) {
    return find(list, identity);
}

function negativeIndex(list) {
    return findIndex(list, not);
}

const compose = function() {
    const args = arguments;
    const start = arguments.length-1;
    return function() {
        let i = start;
        let result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

module.exports = {users, users2, log_length, bvalue, filter,
    map, find, object, match, bmatch, findIndex, some, every, compose};