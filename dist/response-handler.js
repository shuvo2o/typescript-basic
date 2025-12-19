"use strict";
function handleApiRes(response) {
    if (response.status === 200) {
        console.log("Succes:", response.message);
        return response.data;
    }
    else {
        throw new Error("Something went wrong");
    }
}
const user1Res = handleApiRes({
    status: 200,
    message: "User fetched succcessfully",
    data: "user 1"
});
const user2Res = handleApiRes({
    status: 200,
    message: "User fetched succcessfully",
    data: "user 2"
});
const Product1 = handleApiRes({
    status: 200,
    message: "Product fetched succcessfully",
    data: {
        title: "Product 1",
        price: 540
    }
});
