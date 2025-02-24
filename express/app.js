// let express=require('express');
import express from'express'
import {port} from './env.js'
import path from 'path'
let app=express();

        // how to send static file in express
// app.use(express.static("public"))

let Static=path.join(import.meta.dirname,'public');
app.use('/public',express.static(Static))


app.get('/profile/:username',(req,res)=>{

        // dynamic url
        console.log(req.params);
        res.send(`<h1>profile Log-in is ${req.params.username}</h1>`)

        // console.log(import.meta.dirname);
        // console.log(import.meta.url);
        // res.send(`<h1>Env variables</h1>`);

        // let __filename=new URL(import.meta.filename).pathname
        // console.log(__filename);

// how to send file in express

                // let HomePage=path.join(import.meta.dirname,'public','index.html');
                // res.sendFile(HomePage)
})


app.get('/profile/:username/article/:slug',(req,res)=>{
        console.log(req.params);
        // how to remove space from url
        let Formated=req.params.slug.replace(/-/g,"")
        res.send(`<h1>The Article is written by ${req.params.username} and the name is ${Formated}</h1>`)
        
})


app.get('/product',(req,res)=>{
        console.log(req.query);
        // res.send(`<h1>product page ${req.query.search} is here!</h1>`)
        // for limits and pages
        res.send(`<h1>product page ${req.query.page} is here! and the limits are the ${req.query.limit}</h1>`)

        
})
// let port=process.env.port || 2000;
app.listen(port,()=>{
console.log(` i am listening at the ${port}`);

}
)
