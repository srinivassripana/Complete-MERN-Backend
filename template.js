const express = require("express")
const app = express()
const path = require("path")

const port = 8080;

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"))

app.listen(port , ()=>{
    console.log("this is regarding the template in js")
});

app.get("/", (req,res)=>{
    res.render("home.ejs")
});

app.get("/saisrinivas",(req,res)=>{
    let data = Math.floor(Math.random() * 9)
    res.render("rolldice.ejs",{num : data})
})

