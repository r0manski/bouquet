'use strict';

var mongoose = require( 'mongoose' );
var crypto = require('crypto'); //including the library for data encryption
var jwt = require('jsonwebtoken'); //library for JWT - JASON Web Token

var userSchema = new mongoose.Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

//adding method to the Schema that will transform the users password into the state which is secure for storing (salted and hashed)
userSchema.methods.setPassword = function(password){
    //firstly, using randomBytes method of Crypto, we generate a random 16-byte string to set a salt
    this.salt = crypto.randomBytes(16).toString('hex');
    //secondly, using pbkdf2Sync method of Crypto, we create the encrypted hash from the password and the salt
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    //now, when the method will be called with user's password supplied, the salt and the hash will be generated and added to the model instance of user.
    // The password itself will not be saved anywhere in the system.
};

// in order to validate inputted by user password we will do the same password transformation as in method setPassword and then evaluate if the value of the transformed password inputed by user will match with the value stored in the DB.

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};


//creating a schema method to generate a JWT.
//JWT is used to pass data securely between two parties.
//We will use it to pass data between the server and the API.
//One of the advantages of using JWT is to provide a better mobile support, because it is difficult to use coockies on Mobile

userSchema.methods.generateJwt = function() {
    //setting exp day for 7 days, similar to cookies
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    //calling the sign method to generate a JWT and using the returned value as a return for our method
    return jwt.sign({
        //passing payload to method
        _id: this._id,
        email: this.email,
        name: this.name,
        isAdmin: this.isAdmin,
        exp: parseInt(expiry.getTime() / 1000)
        //here we also send a secret, that will be used by hashing algorithm. This secret is stored in an environment variable for security reason
    }, process.env.JWT_SECRET);
};

//compiling model of User from a schema

mongoose.model('User', userSchema);


