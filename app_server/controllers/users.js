var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};
//use different server for Heroku
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://aipbouquet.herokuapp.com/";
}


var mongoose = require('mongoose');
var User = mongoose.model('User');

//Get user account page
//Temporarily making query from here, needs to be moved to API.

module.exports.profile = function (req, res, next) {
    User.findOne({ email: req.params.username }, function (err, user) {
        if(err) {return next(err); }
        if (!user) {return next(404); }
        res.render('profile', {title: 'bouQuet - My profile', user: user});
    });

};