"use strict";
function sumFor(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}

console.log(sumFor([1, 2, 3, 4]));
function sumWhile(list) {
    let i = 0;
    let sum = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4]));
function sumRecursion(list) {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumRecursion(list.slice(1));
}
console.log(sumRecursion([1, 2, 3, 4]));
function sumTheFunctionalWay(list) {
    let result = 0;
    result = list.reduce((acc, cur) => acc + cur, 0);
    return result;
}
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
