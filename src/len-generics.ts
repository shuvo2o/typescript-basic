function printLength<T extends { length: number }>(item: T) {
    console.log("Check the length of:", item.length)
}
printLength("Hello Shuvo");
printLength([2,4,7,8]);
