const express = require("express");
const Admin = require("./adminuser");
const Event = require("./eventmongo");
var nodemailer = require('nodemailer');
const Student = require("./studentmongo");
const User = require("./users");


const app = express();

const EVent = async (req, res) => {

    console.log(req.body);


    const event = new Event(req.body);


    event.save().then(() => {
        console.log("hello");
        res.status(201).send(event);
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
    // var to =   Student.find({
    //     email: {}
    // })
    // let to ;
    // try {
    //     to =  Student.find({
    //         email : {
    //             $in : [email]
    //         }
    //     });

    // } catch (e) {
    //     console.log(e);
    // }
//    var to = Student.find({}, function (err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//           //  console.log(user.email);
//             return user.email;
//         }
//     })
 const to = await Student.find({email: "vipulsharma20623@acropolis.in"})
 console.log(to);
//console.log(to);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vipulsharma7559@gmail.com',
            pass: 'jrfbsbamsyrddkgs'
        }
    });
    var mailOption = {
        from: 'vipulsharma7559@gmail.com',
      to:'vipulsharma20623@acropolis.in',
        // to: to,
        subject: 'Register event here ',
        text: 'solve the detect a loop problem',
        html: `
         <body style="background-color:grey">
            <table align="center" border="0" cellpadding="0" cellspacing="0" 
                   width="550" bgcolor="white" style="border:2px solid black">
                <tbody>
                    <tr>
                        <td align="center">
                            <br />
                            <table align="center" border="0" cellpadding="0"
                                   cellspacing="0" class="col-550" width="550">
                                <tbody>
                                   An Event has been registered
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
        `
    };
    transporter.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    })
}
module.exports = EVent;