type BlogPost ={
    title: string,
    author:string,
    content:string,
    publishedDate:string,
    tags?: string[],
}

function showBlogPost(post: BlogPost){
    console.log(`The Blogs title is ${post.title} and its makers is ${post.author} and its content ${post.content}, its published on ${post.publishedDate}. Ther similar tags for find book ${post.tags} tags`)
}

const blogpost1: BlogPost={
    title: "Learn Typescript",
    author: "Shuvo Dichi",
    content: "This is dummy text",
    publishedDate: "15-12-25",
    tags:["Learning", "TS", "JS alternative"]
}
showBlogPost(blogpost1);