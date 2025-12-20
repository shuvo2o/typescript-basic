enum postStatus{
    Draft = "DRAFT",
    Published = "PUBLISHED",
    Archived = "ARCHIVED",
}
type BlogPostPro = {
    title: string,
    content:string,
    status:postStatus
}

const post1:BlogPostPro = {
    title: "Typescript Enum",
    content: "This is Typescript Enum Practice",
    status: postStatus.Draft
} 
const post2:BlogPostPro = {
    title: "Typescript String",
    content: "This is Typescript String Practice",
    status: postStatus.Published
} 
const post3:BlogPostPro = {
    title: "Typescript Acces modifier",
    content: "This is Typescript Acces modifier Practice",
    status: postStatus.Archived
} 

console.log(post1)
console.log(post2)
console.log(post3)