var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

/* function to render the create-resume page */

var renderCreateResumeForm = function (req, res) {
    res.render('create-resume', {
        title: 'Add your resume'
    });
};

/* GET 'Create resume' page */
module.exports.createResume = function(req, res){

    renderCreateResumeForm(req, res);
};

/* POST 'Add review' page */

module.exports.doCreateResume = function (req, res) {
    var requestOptions, path;
    path = '/api/resumes'; //setting path for API request

    //creating an object containing the variable names that API expects. In our case the names are the same, but it cannot be the case when using external API!!!
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
    //making the request
    request(
        requestOptions,
        function (err, response, body) {

            //redirect to resumes listing if resume was added succesfully or show an error page if API returned an error
            if (response.statusCode === 201) {
                res.redirect('/search-result');
            } else {
                console.log(body);
            }
        });
};