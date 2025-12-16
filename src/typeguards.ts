type Fish ={
    swim:() => void;
}

type Bird = {
    fly: () =>void
}

function isFish(pet: Fish | Bird):pet is Fish{
 return (pet as Fish).swim !== undefined
}
function move(pet: Fish | Bird){
    if(isFish(pet)){
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish:Fish = {
    swim: ()=> console.log("My Fish is swimming....")
}
const myBird:Bird = {
    fly: ()=> console.log("My Bird is Flying....")
}
move(myFish);
move(myBird);

