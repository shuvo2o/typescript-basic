"use strict";
function printLength(item) {
    console.log("Check the length of:", item.length);
}
printLength("Hello Shuvo");
printLength([2, 4, 7, 8]);
function getId(item) {
    return item.id;
}
const result = getId({ id: 40 });
console.log("The id is:", result);
