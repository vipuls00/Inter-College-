const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  // tokens:
  //   [
  //     {
  //       token: {
  //         type: String,
  //         required: true
  //       }
  //     }
  //   ]

})
// adminSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, "MYNMAGGHGHBBHBHABHJSJBJSBHSBHBHJSBHJSBJHSJBHJBSJBJSBJSBJSJS");
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// }
const Admin = new mongoose.model('Admin', adminSchema);
module.exports = Admin;