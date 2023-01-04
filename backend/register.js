const express = require("express");
const Admin = require("./adminuser");
const User = require("./users");
const app = express();
const register = (req,res)=>{
    // app.post("/register",async (req, res) => {
        console.log(req.body);
        // const { name ,password,email} = req.body
  
  const user = new User(req.body);
    //  const admin = new Admin(req.body);
        //  console.log(user);
      
        user.save().then(() => {
          // admin.save().then(() => {
          console.log("hello");
          res.status(201).send(user);
        }).catch((e) => {
          console.log(e);
          res.status(400).send(e);
        })
      
     // })
}
module.exports = register;