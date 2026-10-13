const fs = require('node:fs');

// fs.writeFile("practice.txt","I am learning Express.js",(error)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("File created successfully");
    
// })

fs.readFile("practice.txt","utf8",(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
    
})

// fs.appendFile("practice.txt","\nI am learning Express.js",(error)=>{
//     if(error){
//         console.log(error);
//         return;
        
//     }
//     console.log("File updated successfully");
    
// })