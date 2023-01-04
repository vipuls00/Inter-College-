const express = require("express");
const Registerforeventm = require("./Registerforeventmongo");
const app = express();

const Registerforevent = async (req, res) => {

    console.log(req.body);


    const registerforevent = new Registerforeventm(req.body);


    registerforevent.save().then(() => {
        console.log("hello");
        res.status(201).send(registerforevent);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })

}
module.exports = Registerforevent;