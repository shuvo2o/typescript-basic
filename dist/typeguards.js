"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish = {
    swim: () => console.log("My Fish is swimming....")
};
const myBird = {
    fly: () => console.log("My Bird is Flying....")
};
move(myFish);
move(myBird);
