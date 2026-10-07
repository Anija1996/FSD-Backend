// import { log } from 'console';
import http from 'http';
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    // res.end("hai from backend");
    if(req.url==='/'){
        res.end("WELCOME TO HOME PAGE")
    } else if(req.url==='/about'){
        res.end("Welcome to about")
    } else if(req.url==='/contact'){
        res.end("Welcome to contact");
    } else{
        res.end("Not found");
    }
})
server.listen(5555,()=>console.log("server is running"));


