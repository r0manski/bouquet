'use strict';

var mongoose = require('mongoose');
var Res = mongoose.model('Resume');
var jwt = require('jsonwebtoken');

//utility function that accepts response object, a status code, and a data object

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//creating a new resume in DB using the form data

module.exports.resumesDoCreate = function (req, res) {
    Res.create({
        firstName: req.body.firstName + '',
        lastName: req.body.lastName + '',
        gender: req.body.gender + '',
        birth: req.body.birth + '',
        country: req.body.country + '',
        state: req.body.state + '',
        city: req.body.city + '',
        suburb: req.body.suburb + '',
        addr1: req.body.addr1 + '',
        addr2: req.body.addr2 + '',
        email: req.body.email + '',
        phoneNumber: req.body.phoneNumber + '',
        desiredPosition: req.body.desiredPosition + '',
        desiredSalary: req.body.desiredSalary + '',
        startWork: req.body.startWork + '',
        endWork: req.body.endWork + '',
        workPlace: req.body.workPlace + '',
        workPosition: req.body.workPosition + '',
        workAchievement: req.body.workAchievement + '',
        eduInstitution: req.body.eduInstitution + '',
        eduDepartment: req.body.eduDepartment + '',
        eduSpecialization: req.body.eduSpecialization + '',
        eduGraduation: req.body.eduGraduation + ''

    }, function (err, resume) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, resume);
        }
    });
};

module.exports.resumesList = function (req, res) {
    return Res
        .find()
        .exec(function (err, resume) {

            sendJsonResponse(res, 200, resume)
        });
};

/* GET a resume by the id */
module.exports.resumesReadOne = function(req, res) {
    if (req.params && req.params.resumeid) {
        Res
            .findById(req.params.resumeid + '')
            .exec(function(err, resume) {
                if (!resume) {
                    sendJsonResponse(res, 404, {
                        "message": "resumeid not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJsonResponse(res, 404, err);
                    return;
                }
                console.log(resume);
                sendJsonResponse(res, 200, resume);
            });
    } else {
        console.log('No resumeid specified');
        sendJsonResponse(res, 404, {
            "message": "No resumeid in request"
        });
    }
};

module.exports.resumesDeleteOne = function (req, res) {

    if (req.headers.authorization)

    // decode token

    {
        var token = req.headers.authorization.split(/\s+/).pop()||'';

        var secret = process.env.JWT_SECRET;

        //sendJsonResponse(res, 200, token);
        // decode
        var decoded = jwt.verify(token, secret);

        if (decoded.isAdmin) {
            if (req.params && req.params.resumeid) {
                Res
                    .findByIdAndRemove(req.params.resumeid + '')
                    .exec(function (err, resume) {
                        if (!resume) {
                            sendJsonResponse(res, 404, {
                                "message": "resumeid not found"
                            });
                            return;
                        } else if (err) {
                            console.log(err);
                            sendJsonResponse(res, 404, err);
                            return;
                        }
                        console.log(resume);
                        sendJsonResponse(res, 200, resume);
                    });
            } else {
                console.log('No resumeid specified');
                sendJsonResponse(res, 404, {
                    "message": "No resumeid in request"
                });
            }
        } else {
            sendJsonResponse(res, 401, {
                "message": "Not authorized action. Login as admin."
            });
        }

    } else {

        // if there is no token
        // return an error
        sendJsonResponse(res, 403, {
            "message": "No token provided."
        });

    }
};

module.exports.resumesUpdateOne = function (req, res) {
    if (req.headers.authorization)

    // decode token

    {
        var token = req.headers.authorization.split(/\s+/).pop()||'';

        var secret = process.env.JWT_SECRET;

        //sendJsonResponse(res, 200, token);
        // decode
        var decoded = jwt.verify(token, secret);

        if (decoded.isAdmin) {
            if (req.params && req.params.resumeid) {

                var updateContent = {
                    firstName: req.body.firstName + '',
                    lastName: req.body.lastName + '',
                    gender: req.body.gender + '',
                    birth: req.body.birth + '',
                    country: req.body.country + '',
                    state: req.body.state + '',
                    city: req.body.city + '',
                    suburb: req.body.suburb + '',
                    addr1: req.body.addr1 + '',
                    addr2: req.body.addr2 + '',
                    email: req.body.email + '',
                    phoneNumber: req.body.phoneNumber + '',
                    desiredPosition: req.body.desiredPosition + '',
                    desiredSalary: req.body.desiredSalary + '',
                    startWork: req.body.startWork + '',
                    endWork: req.body.endWork + '',
                    workPlace: req.body.workPlace + '',
                    workPosition: req.body.workPosition + '',
                    workAchievement: req.body.workAchievement + '',
                    eduInstitution: req.body.eduInstitution + '',
                    eduDepartment: req.body.eduDepartment + '',
                    eduSpecialization: req.body.eduSpecialization + '',
                    eduGraduation: req.body.eduGraduation + ''
                };

                Res
                    .findByIdAndUpdate(req.params.resumeid + '', updateContent)
                    .exec(function(err, resume) {
                        if (!resume) {
                            sendJsonResponse(res, 404, {
                                "message": "resumeid not found"
                            });
                            return;
                        } else if (err) {
                            console.log(err);
                            sendJsonResponse(res, 404, err);
                            return;
                        }
                        console.log(resume);
                        sendJsonResponse(res, 200, resume);
                    });
            } else {
                console.log('No resumeid specified');
                sendJsonResponse(res, 404, {
                    "message": "No resumeid in request"
                });
            }
        } else {
            sendJsonResponse(res, 401, {
                "message": "Not authorized action. Login as admin."
            });
        }

    } else {

        // if there is no token
        // return an error
        sendJsonResponse(res, 403, {
            "message": "No token provided."
        });
    }
};

module.exports.resumesSearch = function (req, res) {
    return Res
        .find({
            $or:[
                {"firstName": {$regex: req.body.keyword + '', $options:'i'}},
                {"lastName": {$regex: req.body.keyword + '', $options:'i'}}
            ]
        })
        .exec(function (err, resume) {
            sendJsonResponse(res, 200, resume)
        });
};