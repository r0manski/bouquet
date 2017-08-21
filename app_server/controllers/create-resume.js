var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//Get create resume page

module.exports.createResume = function (req, res) {
    res.render('create-resume', {title: 'Create a resume'});
};