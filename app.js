const express = require("express")
const app = express()
const path = require("path")

app.set("views" , path.join(__dirname + "/views"))
app.set("layout" , path.join(__dirname + "/views/layouts"))
app.set("partials" , path.join(__dirname + "/views/partials"))


app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("login")
});


app.listen(3000)