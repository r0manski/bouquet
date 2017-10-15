'use strict';

var mongoose = require('mongoose');
var Usr = mongoose.model('User');

//Get user account page
//Temporarily making query from here, needs to be moved to API.

module.exports.profile = function (req, res, next) {
    var username = req.params.username;
    Usr.findOne(
        { email: username}, function (err, user) {
        if(err) {return next(err); }
        if (!user) {return next(404); }
        res.render('profile', {title: 'Welcome to user account', user: user });
    });

};

module.exports.adminProfile = function (req, res) {
<<<<<<< HEAD
    //console.log("Logging the Admin");
    res.render('admin-profile', {name: 'Welcome to admin account' });
};
=======
    if (req.decoded.isAdmin === true){
        var username = req.params.username;

        Usr.findOne(
            { email: username}, function (err, user) {
                if(err) {return next(err); }
                if (!user) {return next(404); }
                res.render('admin_profile', {title: 'Welcome to ADMIN account', user: user });
            });
    } else {

        res.redirect('/');
    }
};
>>>>>>> 6e76af01b3cbda3378f25a998731b384d3c6285d
