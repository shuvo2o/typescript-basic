const student = {
    name: "Shuvo",
    age: 25,
}
function printUser(user:{name:string, age:number}){
    console.log(`My name is ${user.name} and I am ${user.age} years old`)
}
printUser(student);