var mongoose = require('mongoose');
var Usr = mongoose.model('User');
var jwt = require('jsonwebtoken'); //temp, move to User methods.

//utility function that accepts response object, a status code, and a data object

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.isAdmin = function (req, res) {

    if (req.headers.authorization)

    // decode token

    {
        var token = req.headers.authorization.split(/\s+/).pop()||'';

        var secret = process.env.JWT_SECRET;

        //sendJsonResponse(res, 200, token);
        // decode
        var decoded = jwt.verify(token, secret);

        sendJsonResponse(res, 200, decoded.isAdmin);

    } else {

        // if there is no token
        // return an error
        sendJsonResponse(res, 403, {
            "message": "No token provided."
        });

    }
};