var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//GET register-success page

module.exports.registerSuccess = function (req, res) {
    res.render('register-success', {title: 'Registration'});
};
