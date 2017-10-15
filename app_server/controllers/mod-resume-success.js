'use strict';

var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//GET create-resume-success page

module.exports.modResumeSuccess = function (req, res) {
    res.render('mod-resume-success', {title: 'bouQuet'});
};
