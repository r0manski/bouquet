'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

//configuring Local auth strategy

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(username, password, done) {
        //search user in mongo with supplied email
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                // if no user is found return false and respective error message
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            //if password is incorrect return false and respective error message
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            //if reached the end, return user object
            return done(null, user);
        });
    }
));