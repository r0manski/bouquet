var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//registering user controller

module.exports.register = function(req, res) {
    //respond with an error if not all the required fields are provided
    if(!req.body.name || !req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    //create a new user instance and set a name and email
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    //setting salt and hash
    user.setPassword(req.body.password);
    //saving a new user to Mongo
    user.save(function(err) {
        var token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            //generate JWT using schema method and send it to browser
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token" : token
            });
        }
    });
};

//authenticating user controller

module.exports.login = function(req, res) {
    //respond with an error if not all the required fields are provided
    if(!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    passport.authenticate('local', function(err, user, info){
        var token;
        //respond with an error if Passport returns an error
        if (err) {
            sendJSONresponse(res, 404, err);
            return;
        }
        //if Passport returned a user object then generate and return a JWT
        if(user){
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                "token" : token
            });
        //return an error if auth failed
        } else {
            sendJSONresponse(res, 401, info);
        }
    })(req, res);
};

// module.exports.loginRequired = function(req, res, next){
//     if (req.user) {
//         next();
//     } else {
//         return res.status(401).json({ message: 'Unauthorized user!' });
//     }
// };

