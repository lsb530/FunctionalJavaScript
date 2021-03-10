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

class myUnderScore {
    static cl = function(...data) {
        console.log(data);
    }

    static map = function map(list, iterate) {
        const new_list = [];
        for(let i=0, len=list.length; i<len; i++) {
            new_list.push(iterate(list[i], i, list));
        }
        return new_list;
    };

    static filter = function(list, predicate) {
        const new_list = [];
        for(let i=0, len=list.length; i<len; i++) {
            if(predicate(list[i], i, list)) new_list.push(list[i]);
        }
        return new_list;
    };

    static find = function(list, predicate) {
        for(let i=0, len=list.length; i<len; i++) {
            if(predicate(list[i], i, list)) return list[i];
        }
    };

    static findIndex = function(list, predicate) {
        for(let i=0, len=list.length; i<len; i++) {
            if(predicate(list[i], i, list)) return i;
        }
        return -1;
    };

    // Truthy Values만을 반환하는 함수
    static identity = function(v) { return v; }

    // 배열에 들어있는 값 중 하나라도 긍정적인 값이 있으면 true, 아니면 false
    static some = function(list) {
        // return !!find(list, this.identity);
        return not(not(find(list, this["identity"])));
    };

    static every = function(list) {
        // return filter(list, this["identity"]).length === list.length;
        return this["beq"](-1)(this["negativeIndex"](list))
    };

    static not = function(v) { return !v; };

    static beq = function(a) {
        return function(b) {
            return a === b;
        }
    };

    static positive = function(list) {
        return this["find"](list, this["identity"]);
    }

    static negativeIndex(list) {
        return this["findIndex"](list, this["not"]);
    }
}

// exports.filter = filter;
module.exports = {users, users2, filter, map, log_length, bvalue, find, object, match, bmatch, findIndex, myUnderScore};