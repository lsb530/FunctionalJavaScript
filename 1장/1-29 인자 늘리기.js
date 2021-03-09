_.map = function(list, iterate) {
    const new_list = [];
    for(let i=0, len=list.length; i<len; i++) {
        new_list.push(iterate(list[i], i, list));
    }
    return new_list;
}
_.filter = function(list, predicate) {
    const new_list = [];
    for(let i=0, len=list.length; i<len; i++) {
        if(predicate(list[i], i, list)) new_list.push(list[i]);
    }
    return new_list;
}


