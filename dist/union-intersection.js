"use strict";
// union 
let value;
function getProduct(id) {
    console.log(`Fetching product with id: ${id} `);
}
getProduct("abc123");
getProduct("123");
const admin = {
    id: "user1",
    name: "Shuvo",
    isAdmin: true,
};
console.log(admin);
function handelAction(action) {
    console.log(`Action: ${action}`);
}
handelAction("start");
handelAction("stop");
handelAction("pause");
handelAction("submit");
handelAction("reset");
