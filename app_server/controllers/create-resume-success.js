var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//GET create-resume-success page

module.exports.createResumeSuccess = function (req, res) {
    res.render('create-resume-success', {title: 'Add your resume'});
};
