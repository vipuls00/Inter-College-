const express = require("express");
const User = require('./users')
const Event = require("./eventmongo");
require("./conn");
const cors = require("cors");
const register = require("./register");
const Teacherlogin = require("./teacherlogin");
const Adminlogin = require("./adminlogin");
const EVent = require("./Event");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Studentlogin = require("./Studentlogin");
const studentregister = require("./studentregister");
const Student = require("./studentmongo");
const Registerforevent = require("./Registerforevent");
const Registerforeventm = require("./Registerforeventmongo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "secret"
}))


const port = process.env.port || 5000;



app.post("/test", (req, res) => {
  console.log(req.body);
  console.log("Successfully handeled.")
})
app.get('/logout', (req, res) => {
  //res.clearCookie('jwtoken');
  req.session.destroy();
  console.log("hello my logout page");
  res.status(200).send('user logout');
})
app.get("/getteacher", (req, res) => {
  User.find({}, (err, user) => {
    res.json(user);
    //  console.log(user);
  })
})
// var path;
//  var to =app.get("/",(req, res)=>{

//   // db.collection('paths', function(err, collection) {
//      Student.find({email},(err,data)=>{
//        if(err){
//         console.log(err);
//        }else{
//         return data.email
//        }
//     });
//   });
// console.log(to);
app.get("/getstudents", (req, res) => {
  Student.find({}, (err, student) => {
    res.json(student);
    //  console.log(user);
  })
})
app.get("/getregisteredstudents", (req, res) => {
  Registerforeventm.find({}, (err, student) => {
    res.json(student);
    //  console.log(user);
  })
})
app.get("/getregisteredforevent", (req, res) => {
  Registerforeventm.find({name : Registerforeventm.name}, (err, student) => {
    res.json(student);
    //  console.log(user);
  })
})
app.get("/event", (req, res) => {
  Event.find({}, (err, event) => {
    res.json(event);
     console.log(event);
  })
})

app.use("/registerforevent", Registerforevent);
app.use("/eventregister", EVent);
app.use("/register", register);
app.use("/studentregister", studentregister);
app.use("/teacherlogin", Teacherlogin);
app.use("/studentlogin", Studentlogin);
app.use("/adminlogin", Adminlogin);

app.listen(port, () => {
  console.log(`sjdbvhdss ${port}`);
})