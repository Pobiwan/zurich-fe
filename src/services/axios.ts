import axios from "axios"

// type GetFirstArgumentOfAnyFunction<T> = T extends (
//     first: infer FirstArgument,
//     ...args: any[]
//   ) => any
//     ? FirstArgument
//     : never

async function getRequest(url:string){
    return axios.get(url);
}

export { getRequest }