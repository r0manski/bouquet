var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};

//Get create resume page

//render function separated
var renderSearchResult = function (req, res, responseBody) {
    res.render('search-result', {
        title: 'Search results',
        resumes: responseBody
    });
};

//call API before rendering the page

module.exports.searchResult = function (req, res) {
    var requestOptions, path;
    path = 'api/resumes'; //setting path for API request
    requestOptions = { //setting request options including URL, method, JSON body, and query string parameters
        url: apiOptions.server + path,
        method: 'GET',
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function (err, response, body) {
            renderSearchResult(req,res, body);
        })
};