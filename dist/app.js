"use strict";
// function 
function greet(fname, lname, title) {
    return `Hello, ${fname}-${lname}`;
}
console.log(greet('Shuvo', 'Das'));
// default params
function welcome(name = "Guest") {
    return `Welcome ${name}`;
}
console.log(welcome('Shuvo'));
console.log(welcome());
