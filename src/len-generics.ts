function printLength<T extends { length: number }>(item: T) {
    console.log("Check the length of:", item.length)
}
printLength("Hello Shuvo");
printLength([2,4,7,8]);


interface HasId{
    id:number
}

function getId<Type extends HasId>(item:Type){
    return item.id;
}
const result = getId({id: 40})
console.log("The id is:", result)