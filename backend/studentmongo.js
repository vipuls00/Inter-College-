const mongoose = require("mongoose");
const Studentschema = new mongoose.Schema({
    name: {
        type: String,
      },
      password: {
        type: String,
      },
      email: {
        type: String,
      },
      contact : {
        type : String
      },
      college : {
      type : String
      }
})
const Student = new mongoose.model('Student', Studentschema);
module.exports = Student;