const express = require("express")
const bodyParser = require("body-parser")
const {Pool, Client} = require("pg");
var urlencode = bodyParser.urlencoded({ extended : false})
var jsonencode = bodyParser.json()
router = express.Router();

router.post('/', urlencode, (req,res)=>{
    var email = req.body.email;
    var password_f = req.body.password;

    var login_conn = new Pool({
        host : "localhost",
        database : "Risevest",
        password : "Oluwadamilare3#",
        port : 5432,
        user : "postgres"
    })

    if(email == "" || email == null || password_f == "" || password_f == null) {
        res.render("login" , information =  {"info" : "Fill in all boxes"})
    }else {
        login_conn.query("SELECT * FROM registered_users WHERE email = $1 " ,[email], (err,ress)=>{
            // res.status(200).json(ress.rowCount);
            if(ress.rowCount != 0){
                dbpass = (ress.rows[0])["password"];
                if(password_f == dbpass){
                    res.render("login" , information =  {"info" : "Logged in"})
                }else{
                    res.render("login" , information =  {"info" : "invalid password"})
                }
            }else{
                res.render("login" , information =  {"info" : "Nothing For you"})
            }
        })
    
    }
})

module.exports = router