const http = require('node:http');
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("HOME PAGE");
    } else if(req.url==="/about"){
        res.end("ABOUT");
    } else if(req.url==="/contact"){
        res.end("CONTACT");
    } else{
        res.end("Page not found");
    }
    
    
});
server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
    
})