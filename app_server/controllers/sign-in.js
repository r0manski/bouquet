'use strict';

var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//GET sign-in page

module.exports.login = function (req, res) {
    res.render('sign-in', {title: 'Sign-in'});
};

/* POST sign-in page */

module.exports.doLogin = function (req, res) {
    var requestOptions, path;
    path = '/api/login'; //setting path for API request

    //creating an object containing the variable names that API expects. In our case the names are the same, but it cannot be the case when using external API!!!
    var postdata = {
        email: req.body.email,
        password: req.body.password
    };
    requestOptions = { //setting request options including URL, method, JSON body, and query string parameters
        url: apiOptions.server + path,
        method: 'POST',
        json : postdata
    };
    //making the request
    request(
        requestOptions,
        function (err, response, body) {

            //redirect to create resume page if user was registered succesfully or show an error page if API returned an error
            if (response.statusCode === 200) {
                res.redirect('/sign-in-success');
            } else {
                console.log(body);
            }
        });
};