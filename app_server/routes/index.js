'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload' //define property on req to be payload
});

//temp references. needs to be removed later
require('dotenv').load(); // read and use .env files
var async = require('async');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var passport = require("passport");
var User = mongoose.model('User');
var crypto = require('crypto');
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
//temp end

var ctrlMain = require('../controllers/main');
var ctrlSearchResult = require('../controllers/search-result');
var ctrlViewResume = require('../controllers/view-resume');
var ctrlCreateResume = require('../controllers/create-resume');
var ctrlSignIn = require('../controllers/sign-in');
var ctrlRegister = require('../controllers/register');
var ctrlEditResume = require('../controllers/edit-resume');
var ctrlError = require('../controllers/error');
var ctrlSuccess = require('../controllers/success');



/* GET create resume page */
router.get('/create-resume', ctrlCreateResume.createResume);

/* POST create resume page */
router.post('/create-resume', auth, ctrlCreateResume.doCreateResume);

/* GET view resume page */
router.get('/view-resume/:resumeid', ctrlViewResume.viewResume);

/* GET search result page */
router.get('/search-result', ctrlSearchResult.search);

/* GET home page */
router.get('/', ctrlMain.index);

/* GET sign-in page */
router.get('/sign-in', ctrlSignIn.login);

/* Post sign-in page */
router.post('/sign-in', ctrlSignIn.doLogin);

/* GET registration page */
router.get('/register', ctrlRegister.register);

/* POST registration page */
router.post('/register', ctrlRegister.doRegister);

/* GET search-result page (based on search keywords) */
router.get('/search-result/:keyword', ctrlSearchResult.search);

/* GET edit-resume page */
router.get('/edit-resume/:resumeid', ctrlEditResume.editResume);

/* UPDATE edit-resume page */
router.post('/edit-resume', auth, ctrlEditResume.doEditResume);

/* GET error page */
router.get('/error/:errorid', ctrlError.error);

/* GET success page */
router.get('/success/:successid', ctrlSuccess.success);


// forgot password. temp placed here.

router.get('/forgot', function(req, res) {
    res.render('forgot');
});

router.post('/forgot', function(req, res, next) {
    async.waterfall([
        function(done) {
            console.log("resetting started");
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            console.log("finding user in db");
            User.findOne({ email: req.body.email }, function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 400, 'No account with that email address exists.');
                    return res.redirect('/forgot');
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function(err) {
                    done(err, token, user);
                });
                console.log("finding user in db - finished");
            });
        },
        function(token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'rp.publicbox@gmail.com',
                    pass: process.env.GMAILPW
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'rp.publicbox@gmail.com',
                subject: 'Bouquet Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                console.log('mail sent');
                console.log('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
                done(err, 'done');
            });
        }
    ], function(err) {
        if (err) return next(err);
        res.redirect('/forgot');
    });
});

router.get('/reset/:token', function(req, res) {
    console.log('checking user by temp token');
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
            console.log('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
        }
        res.render('reset', {token: req.params.token});
    });
});

router.post('/reset/:token', function(req, res) {
    console.log('POST checking user by temp token');
    async.waterfall([
        function(done) {
            User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
                if (!user) {
                    console.log('error', 'Password reset token is invalid or has expired.');
                    return res.redirect('back');
                }
                if(req.body.password === req.body.confirm) {
                    //setting salt and hash
                    user.setPassword(req.body.password);
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;


                    user.save(function(err) {
                        if (err) {
                            console.log('failed saving user');
                        } else {
                            console.log('new creds are successfully saved');
                            res.redirect('/sign-in');
                        }
                    });
                } else {
                    console.log("error", "Passwords do not match.");
                    return res.redirect('back');
                }
            });
        },
        function(user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'rp.publicbox@gmail.com',
                    pass: process.env.GMAILPW
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'rp.publicbox@gmail.com',
                subject: 'Your password has been changed',
                text: 'Hello,\n\n' +
                'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                console.log('Success! Your password has been changed.');
                done(err);
            });
        }
    ], function(err) {
        res.redirect('/');
    });
});


module.exports=router;



