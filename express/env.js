// Normal env port validation without library

// export let port=isNaN(process.env.port)?3002:parseInt(process.env.port) 

// zod validation using library
import {z} from 'zod'

// let schema=z.number().min(15).max(80).int();
// let user=10;
// try {
//     let parseAge=schema.parse(user)
// console.log(parseAge);
// } catch (error) {
//     if (error instanceof ZodError) {
//         console.log(error.errors[0].message);
        
//     }
//     else{
//         console.log(`unexpected Error`,error);
        
//     }
// }

let schema=z.coerce.number().min(1).max(65535).default(2002)
export let port=schema.parse(process.env.port)