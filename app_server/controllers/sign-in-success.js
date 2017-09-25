var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//GET sign-in-success page

module.exports.loginSuccess = function (req, res) {
    res.render('sign-in-success', {title: 'Sign-in'});
};
