const express = require("express")
const bodyParser = require("body-parser")
const {Pool, Client} = require("pg");
var urlencode = bodyParser.urlencoded({ extended : false})
var jsonencode = bodyParser.json()
router = express.Router();

router.post('/', urlencode, (req,res)=>{
    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phonenumber = req.body.phoneNo;
    var password = req.body.password;

    var register_conn = new Pool({
        host : "localhost",
        database : "Risevest",
        password : "Oluwadamilare3#",
        port : 5432,
        user : "postgres"
    })

    register_conn.query("INSERT INTO registered_users(email,firstname, lastname ,phoneno, password) VALUES($1,$2,$3,$4,$5)" ,[email,firstname,lastname,phonenumber,password], (err,ress)=>{
        res.send(email+ firstname + lastname + phonenumber + password)
    })
    
})

module.exports = router