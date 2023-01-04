const express = require("express");
const Student = require("./studentmongo");
 const student = require('./studentmongo');



const Studentlogin = (req, res)=>{

        const { name, password } = req.body
        Student.findOne({ name: name }, (err, student ) => {
       
      
          if (student) {
            if (password === student.password) {
           res.send({ message: "login successfull", student:student ,status:true})
           console.log(student);
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
module.exports = Studentlogin;