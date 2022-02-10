const express = require("express")
const app = express()
const path = require("path")
const registerRoute = require("./routes/registerRoute.js")
const {Pool,Client} = require("pg")
const sqlCreateRoute = require("./routes/sqlCreateRoute.js")

// connecting to postgres database
var pool = new Pool({
    user : "postgres",
    database : "Risevest",
    password : "Oluwadamilare3#",
    host : "localhost",
    port : 5432
})



app.set("views" , path.join(__dirname + "/views"))
app.set("layout" , path.join(__dirname + "/views/layouts"))
app.set("partials" , path.join(__dirname + "/views/partials"))
app.use(express.static("./public"))


//connecting routes
app.use("/register", registerRoute);
app.use("/sqlcreate" , sqlCreateRoute);

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("Register")
});

app.get("/sqlcreate" , (req,res)=>{
    res.render("sqlCreate")
})

app.listen(3000)