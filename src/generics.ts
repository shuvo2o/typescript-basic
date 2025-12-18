function getData<T>(data: T){
 console.log(data);
}
getData<string>("Shuvo")
getData<number>(400)
getData<boolean>(true)

interface Generics<T>{
    success: boolean;
    data:T
}

const getStringGenerics: Generics<{name: string}> ={
    success: true,
    data: {
        name:"Shuvo"
    }
}
const getNumberGenerics: Generics<number> ={
    success: true,
    data: 500

}