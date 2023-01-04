const express = require("express");

const register = require("./register");
const User = require("./users");



const Teacherlogin = (req, res)=>{
//  app.post("/teacherlogin", (req, res) => {

    // const name = req.body.name;
        const { name, password } = req.body
        User.findOne({ name: name }, (err, user) => {
       
      
          if (user) {
            if (password === user.password) {
           res.send({ message: "login successfull", user:user ,status:true})
           console.log(user);
            }
            
            else {
              res.send({ message: "paswword didnt match",status:false })
            }
          } else {
            res.send({ message: "user not registered",status:false})
          }
        })
    //  })
      
   
    }
module.exports = Teacherlogin;