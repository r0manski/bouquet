var mongoose = require('mongoose');
var Res = mongoose.model('Resume');

//utility function that accepts response object, a status code, and a data object

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};


//controller's placeholders

module.exports.resumesCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.resumesReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.resumesList = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.resumesUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.resumesDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
