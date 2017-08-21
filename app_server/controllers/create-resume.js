var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};


/* GET 'Create resume' page */
module.exports.createResume = function(req, res){

    res.render('create-resume', {title: 'Add your resume'});
};

/* POST 'Add review' page */

module.exports.doCreateResume = function (req, res) {
    var requestOptions, path, postdata;
    path = 'api/resumes'; //setting path for API request
    var postdata = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        birth: req.body.birth,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        suburb: req.body.suburb,
        addr1: req.body.addr1,
        addr2: req.body.addr2,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };
    requestOptions = { //setting request options including URL, method, JSON body, and query string parameters
        url: apiOptions.server + path,
        method: 'POST',
        json : postdata
    };
    request(
        requestOptions,
        function (err, response, body) {
            res.redirect('/search-result');
        });
};