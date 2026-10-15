const http = require('node:http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader("Content-Type","text/plain")
        res.end("HOME PAGE");
    } else if(req.url==='/about'){
        res.statusCode=200;
        res.setHeader("Content-Type","text/plain")
        res.end("ABOUT PAGE");
    } else {
        res.statusCode=404;
        res.setHeader("Content-Type","text/plain")
        res.end("Page not found");
    }
});

server.listen(3000,()=>{
    console.log("Server running on 3000");
    
});