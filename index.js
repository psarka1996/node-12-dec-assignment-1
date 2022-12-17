const express= require("express");
const app=express();
const PORT=8000;

app.get("/",(req,res)=>{
    res.send("<h1>hello Aaakash developers</h1>")
})

app.listen(PORT,(req,res)=>{
    console.log("server is running on PORT 8000");
})

// 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