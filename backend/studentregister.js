const express = require("express");
const Admin = require("./adminuser");
const Student = require("./studentmongo");
const student = require('./studentmongo');
const app = express();
const studentregister = (req,res)=>{
    // app.post("/register",async (req, res) => {
        console.log(req.body);
        // const { name ,password,email} = req.body
  
  const student = new Student(req.body);
    //  const admin = new Admin(req.body);
        //  console.log(user);
      
        student.save().then(() => {
          // admin.save().then(() => {
          console.log("hello");
          res.status(201).send(student);
        }).catch((e) => {
          console.log(e);
          res.status(400).send(e);
        })
      
     // })
}
module.exports = studentregister;