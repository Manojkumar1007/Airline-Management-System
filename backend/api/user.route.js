const express = require("express");
const router = express.Router();

//mongo user model
const user = require("../models/user.model");

//mongo user verification model
const userVerification = require("../models/userVerification.model");

//email handler
const nodemailer = require("nodemailer"); 

//unique string
const {v4: uuidv4} = require("uuid");

//env variables
require("dotenv").config();

//password handler 
const bcrypt = require("bcrypt");

//path for static verified page 
const path = require("path");

//express-validator
const { body, validationResult } = require('express-validator');

//nodemailer stuff
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    }
})

//testing success
transporter.verify((error,success) => {
    if(error) {
        console.log(error);
    }else{
        console.log("Ready for messages");
        console.log(success);
    }
})

function trimString(value){
    return typeof value === 'string' ? value.trim() : value 
}

//Signup
router.post('/signup',(req,res) => {
    let {name, email, password} = req.body;
    name = trimString(name);
    email = trimString(email);
    password = trimString(password);
    //dateOfBirth = dateOfBirth.trim();

    if(name == "" || email == "" || password == ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    }else if(!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        });
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        });
    }else if(password.length < 8){
        res.json({
            status: "FAILED",
            message: "Password is too short"
        });
    }else{
        //checking for if user already exists
        user.find({email}).then(result => {
            if(result.length){
                //A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })
            }else{
                //try to create a new user 

                //password handling
                const saltRounds = 10 ;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new user({
                        name,
                        email,
                        password: hashedPassword,
                        //dateOfBirth
                    });

                    newUser.save().then(result => {
                        //handle account verification
                        sendVerificationEmail(result, res);
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An Error Occured while saving user account!"
                        });
                    })
                }).catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An Error Occured while hashing password!"
                    });
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An Error Occured while checking for existing user!"
            });
        })
    }
});

//send verification email
const sendVerificationEmail = ({_id,email}, res) => {
    //url to be used in the email
    const currentUrl = "http://localhost:5000/" ;

    const uniqueString = uuidv4() + _id;

    //mail options
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify Your Email",
        html: `<p>Verify your email address to complete the signup and login into your account</p><p>This link <b>expires in 6 hours.</b></p><p>Press <a href=${currentUrl + "user/verify/"+ _id + "/" + uniqueString}>here</a> to proceed</p>`
    };

    //hash the unique string
    const saltRounds = 10 ;
    bcrypt
        .hash(uniqueString, saltRounds)
        .then((hashedUniqueString) => {
            //set values in userVerification collection
            const newVerification = new userVerification({
                userId: _id,
                uniqueString: hashedUniqueString,
                createdAt: Date.now(),
                expiresAt: Date.now() + 21600000,
            });

            newVerification
                .save()
                .then(() => {
                    transporter.sendMail(mailOptions)
                    .then(()=> {
                        //email sent and verification record saved
                        res.json({
                            status: "PENDING",
                            message: "Verification email sent",
                        });
                    })
                    .catch((error) => {
                        res.json({
                            status: "FAILED",
                            message: "Verification email failed",
                        });
                    })
                })
                .catch((error) => {
                    console.log(error);
                    res.json({
                        status: "FAILED",
                        message: "Couldn't save verification email data!",
                    });
                })
        })
        .catch(()=>{
            res.json({
                status: "FAILED",
                message: "An error occured while hashing your email data",
            });
        })
}
//verify email
router.get("/verify/:userId/:uniqueString", (req,res) => {
    let {userId,uniqueString} = req.params;

    userVerification
        .find({userId})
        .then((result) => {
            if(result.length > 0) {
                //user verification record exists so we proceed

                const {expiresAt} = result[0];
                const hashedUniqueString = result[0].uniqueString;
                if(expiresAt < Date.now()){
                    //record has expired so we delete it
                    userVerification
                    .deleteOne({userId})
                    .then(result => {
                        user.deleteOne({_id: userId})
                        .then(() => {
                            let message = "Link has expired. Please sign up again.";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })
                        .catch(error => {
                            let message = "Clearing user with expired unique string failed";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                        let message = "An error occured while clearing expired user verification record";
                        res.redirect(`/user/verified/error=true&message=${message}`);
                    })
                }else{
                    //valid record exists so we validate the user string
                    //first compare the hashed unique string
                    bcrypt.compare(uniqueString, hashedUniqueString)
                    .then(result => {
                        if(result) {
                            //strings match

                            user.updateOne({_id: userId}, {verified: true})
                            .then(() => {
                                userVerification.deleteOne({userId})
                                .then(() => {
                                    res.sendFile(path.join(__dirname, "./../views/verified.html"));
                                })
                                .catch(error => {
                                    console.log(error)
                                    let message = "An error occured while finalizing successful verification.";
                                    res.redirect(`/user/verified/error=true&message=${message}`);
                                })
                            })
                            .catch(error => {
                                let message = "An error occured while updating user record to show verified.";
                                res.redirect(`/user/verified/error=true&message=${message}`);
                            })
                        }else{
                            //existing record but incorrect verification details passed.
                            let message = "Invalid verification details passed. Check your inbox.";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        }
                    })
                    .catch(error => {
                        let message = "An error occured while comparing unique strings.";
                        res.redirect(`/user/verified/error=true&message=${message}`);
                    })
                }
            }else{
                //user verification record doesn't exist
                let message = "Account record doesn't exist or has been verified already. Please sign up or log in.";
                res.redirect(`/user/verified/error=true&message=${message}`);
            }
        })
        .catch((error) => {
            console.log(error);
            let message = "An error occured while checking for existing user verification record";
            res.redirect(`/user/verified/error=true&message=${message}`);
        })

})

//verified page route
router.get("/verified", (req,res) => {
    res.sendFile(path.join(__dirname,"./../views/verified.html"));
});

//Signin
router.post('/signin',(req,res) =>{
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if(email == "" || password == ""){
        res.json({
            status: "FAILED",
            message: "Empty credentials Supplied"
        });
    }else{
        //check if user exist
        user.find({email})
        .then(data => {
            if (data.length) {
                //user exists

                //check if user is verified

                if(!data[0].verified){
                    res.json({
                        status : "FAILED",
                        message: "Email hasn't been verified yet. Check your inbox.",
                    });
                }else{
                    const hashedPassword = data[0].password;
                    bcrypt.compare(password,hashedPassword).then(result => {
                    if(result) {
                        //password match
                        res.json({
                            status : "SUCCESS",
                            message: "Signin successful",
                            data: data
                        });
                    }else{
                        res.json({
                            status : "FAILED",
                            message: "Invalid password entered!",
                        });
                    }
                    })
                    .catch(err => {
                        res.json({
                            status : "FAILED",
                            message: "An error occured while comparing the passwords",
                        });
                    })
                }
                
            }else{
                res.json({
                    status : "FAILED",
                    message: "Invalid credentials entered!",
                });
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user"
            })
        })
    }
});

module.exports = router ;