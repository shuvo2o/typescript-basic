// function 
function greet(fname:string, lname:string, title?:string): string{
    return `Hello, ${fname}-${lname}`;
}
console.log(greet('Shuvo', 'Das'))

// default params
function welcome(name:string = "Guest"):string{
    return `Welcome ${name}`;
}
console.log(welcome('Shuvo'));
console.log(welcome());