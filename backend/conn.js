const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/intercollege", {
useNewUrlParser: true,
 useUnifiedTopology: true
}, () => {
  console.log("db connected")
});
//  mongoose.connect("mongodb://localhost:27017/intercollege", {
// useNewUrlParser: true,
//  useUnifiedTopology: true
// }, () => {
//   console.log("db connected")
// });
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   email: {
//     type: String,
//   }
//   // name: String,
//   // password : String,
//   // email: String
// })
// const User = new mongoose.model('User', userSchema);
//  mongoose.connect("mongodb://localhost:27017/intercollege").then(()=>{
//     console.log("mongoose connected")
//  }).catch((e)=>{
//     console.log(e)
//  })
