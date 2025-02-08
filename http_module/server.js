let http=require('http');
let server=http.createServer((req,res)=>{

    if (req.url=='/') {
        res.setHeader('Content-Type','text/plain')
        res.write(`I am Aniba shakeel`)
        res.end()
    }

    if (req.url=='/about') {
        res.write(`<h1>I am About page of Aniba,,hi,hiiiiiiiii</h1`)
        res.end()
    }
})

let port=2000;
server.listen(port,()=>{
    console.log(`Server is listening at the port ${port}`);
    
})
