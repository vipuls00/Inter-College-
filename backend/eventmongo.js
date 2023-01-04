const mongoose = require("mongoose");
const Eventschema = new mongoose.Schema({
    eventname: {
      type: String,
    },
    date: {
      type: Date,
    },
     collegename: {
       type: String,
    },
    type: {
        type: String,
     },
     teacher: {
        type: String,
     },
     fees: {
        type: Number,
     }
})
const Event = new mongoose.model('Event', Eventschema);
module.exports = Event;