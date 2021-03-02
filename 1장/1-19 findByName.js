const { users, filter, map, log_length, bvalue } = require('./functions');
function findByName(list, name) {
    for(let i=0, len=list.length; i<len; i++) {
        if(list[i].name == name) return list[i];
    }
}
console.log(findByName(users,'BJ'));
console.log(findByName(users,'JE'));