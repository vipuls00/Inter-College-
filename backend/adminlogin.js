const express = require("express");
//const jwt = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Admin = require("./adminuser")
const app = express();

const Adminlogin = (req,res)=>{
//   Adminlogin.use(cookieParser());
// Adminlogin.use(session({
//   resave:true,
//   saveUninitialized:true,
//   secret:"secret"
// }))
    // app.post("/adminlogin", (req, res) => {
        const { name, password } = req.body
        console.log(req.body);
        Admin.findOne({ name: name },async (err, admin) => {
          req.session.admin = admin;
          req.session.save(); 
          if (admin) {
           // const token = await admin.generateAuthToken();
           // console.log(token);
           // res.cookie("jwtoken",token);
            if (password === admin.password) {
          //  console.log("anddaj");
            
              res.send({ message: "login successfull", admin:admin,status:true })
            console.log('hellow');
            }
            else {
              res.send({ message: "paswword didnt match",status : false })
            }
          } else {
            res.send({ message: "user not registered",status:false })
          }
        })
      // }
      // )
      
   
}
module.exports = Adminlogin;