const student = {
    name: "Shuvo",
    age: 25,
}
function printUser(user:{name:string, age:number}){
    console.log(`My name is ${user.name} and I am ${user.age} years old`)
}
printUser(student);

// type User={
//     name: string,
//     age: number
// }
// function showUser(user: User){
//     console.log(user.name);
//     console.log(user.age);
// }
// const users= {
//   name: "Alice", age:20
// }
// showUser(users)


type Product = {
    id: number,
    category: string,
    name: string,
    brand: string,
    price:number,
    details?:string
}

function showProduct(product: Product){
    console.log(`The product name is ${product.name},This is the very known company of ${product.brand}. Its price ${product.price} and ist variant and details is ${product.details}`)
}
const product1:Product ={
    id: 1,
    category:"Mobile",
    name:"iPhone 17",
    brand:"Apple",
    price: 170000,
    details: "iPhone 17 pro max latest model"
}
const product2 ={
    id: 2,
    category:"Mobile",
    name:"Samsung S25",
    brand:"Samsung",
    price: 120000,
    details: "Samsung S25 Ultra latest model"
}
showProduct(product1);
showProduct(product2);