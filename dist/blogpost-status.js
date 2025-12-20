"use strict";
var postStatus;
(function (postStatus) {
    postStatus["Draft"] = "DRAFT";
    postStatus["Published"] = "PUBLISHED";
    postStatus["Archived"] = "ARCHIVED";
})(postStatus || (postStatus = {}));
const post1 = {
    title: "Typescript Enum",
    content: "This is Typescript Enum Practice",
    status: postStatus.Draft
};
const post2 = {
    title: "Typescript String",
    content: "This is Typescript String Practice",
    status: postStatus.Published
};
const post3 = {
    title: "Typescript Acces modifier",
    content: "This is Typescript Acces modifier Practice",
    status: postStatus.Archived
};
console.log(post1);
console.log(post2);
console.log(post3);
