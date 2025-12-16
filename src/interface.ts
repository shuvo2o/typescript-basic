interface Animal{
    name: string
}
interface Dog extends Animal{
    breed:string
}

const myDog: Dog ={
    name: "Tommy",
    breed: "Golden Retrive"
}
console.log(myDog)