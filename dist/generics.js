"use strict";
function getData(data) {
    console.log(data);
}
getData("Shuvo");
getData(400);
getData(true);
const getStringGenerics = {
    success: true,
    data: {
        name: "Shuvo"
    }
};
const getNumberGenerics = {
    success: true,
    data: 500
};
