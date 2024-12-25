const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on this ${port}`);
});

const path=require("path");
app.set("views",path.join(__dirname,"/views"));

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.use(express.static("public"));

let followers=["aman","akhilesh","ravi"];
app.get("/list",(req,res)=>{
    res.render("html.ejs",{followers});
});
     

app.get("/username",(req,res)=>{
    
    
   let {username}=req.params;
   req.send(`this a0
    ccoumt is belomg to @${username}`);

  
   });
   app.get("/rolldice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceval:num,followers});
});