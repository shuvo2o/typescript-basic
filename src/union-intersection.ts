// union 
let value:string|number;
type ProductID = string|number;

function getProduct(id: ProductID){

    console.log(`Fetching product with id: ${id} `)
}
getProduct("abc123");
getProduct("123");

// intersection
type User = {
    id: string,
    name: string
}
type Admin ={
    isAdmin: boolean
}
type AdminUser = User & Admin;
const admin: AdminUser = {
    id: "user1",
    name: "Shuvo",
    isAdmin: true,
}
console.log(admin)

type Action =  "start" | "pause" | "stop" | "submit" | "reset";
function handelAction(action:Action){
    console.log(`Action: ${action}`)
}
handelAction("start");
handelAction("stop");
handelAction("pause");
handelAction("submit");
handelAction("reset");
