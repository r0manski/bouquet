'use strict';

var Twit = require('twit');

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

//utility function that accepts response object, a status code, and a data object

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//posting a tweet when creating a resume

module.exports.doTwit = function (req, res) {
    if (req.params && req.params.resumeid){
        T.post('statuses/update', { status: 'new resume were posted at: https://aipbouquet.herokuapp.com/view-resume/' + req.params.resumeid }, function(err, data, response) {
            console.log(data);
            sendJsonResponse(res, 200, 'twit was posted');
        })
    } else {
        sendJsonResponse(res, 400, 'twit unsuccessful');
    }
};