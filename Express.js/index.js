const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})
app.get("/about",(req,res)=>{
    res.send("ABOUT PAGE")
})
app.get("/contact",(req,res)=>{
    res.send("CONTACT PAGE")
})

//Route Parameters
app.get("/users/:name",(req,res)=>{
    res.send(`Hello,${req.params.name}`);
})

//Query Parameters
app.get("/search",(req,res)=>{
    res.send(`You selected: ${req.query.course}`);
})

//POST 
app.post("/notes",(req,res)=>{
    res.send("New note created");
})

//PUT
app.put("/notes/:id",(req,res)=>{
    res.send(`Note ${req.params.id} updated`);
})

app.delete("/notes/:id",(req,res)=>{
    res.send(`Note ${req.params.id} deleted`);
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})