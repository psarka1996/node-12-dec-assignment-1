const express= require("express");
const app=express();
const PORT=8000;

app.get("/",(req,res)=>{
    res.send("<h1>hello Fullstack developers</h1>")
})

app.listen(PORT,(req,res)=>{
    console.log("server is running on PORT 8000");
})


https://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@github.com/psarka1996/node-12-dec-assignment-1.git