const mongoose = require("mongoose");
const Registerforeventmongo = new mongoose.Schema({
    name: {
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
const Registerforeventm = new mongoose.model('Registerforeventm', Registerforeventmongo);
module.exports = Registerforeventm;