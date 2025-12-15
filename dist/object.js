"use strict";
const student = {
    name: "Shuvo",
    age: 25,
};
function printUser(user) {
    console.log(`My name is ${user.name} and I am ${user.age} years old`);
}
printUser(student);
function showUser(user) {
    console.log(user.name);
    console.log(user.age);
}
const users = {
    name: "Alice", age: 20
};
showUser(users);
function showProduct(product) {
    console.log(`The product name is ${product.name},This is the very known company of ${product.brand}. Its price ${product.price} and ist variant and details is ${product.details}`);
}
const product1 = {
    id: 1,
    category: "Mobile",
    name: "iPhone 17",
    brand: "Apple",
    price: 170000,
    details: "iPhone 17 pro max latest model"
};
const product2 = {
    id: 2,
    category: "Mobile",
    name: "Samsung S25",
    brand: "Samsung",
    price: 120000,
    details: "Samsung S25 Ultra latest model"
};
showProduct(product1);
showProduct(product2);
