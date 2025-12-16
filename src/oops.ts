class Person {
    name: string;
    age: number;

    constructor(){
        this.name = "";
        this.age = 0;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const user = new Person()

user.name = "Shuvo";
user.age = 0
user.greet();
