'use strict';

var mongoose = require('mongoose');

//defining and connecting to Mongo DB
var dbURI = 'mongodb://localhost/bouquet';

if (process.env.NODE_ENV === 'production') {
    dbURI = 'mongodb://badmin:secret@ds149724.mlab.com:49724/bouquet';
}

mongoose.connect(dbURI);

//monitor connection

mongoose.connection.on('connected', function () {
    console.log('Mongoose has successfully connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose has disconnected');
});

// capturing termination events


//function to close Mongoose connection

var delicateShutdown = function( msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose has disconnected because ' + msg);
        callback();
    });
};

//adding event listeners

//listen for SIGUSR2(nodemon event), send message to delicateShutdown and callback to kill process, emitting SIGUSR2 again
process.once('SIGUSR2', function () {
    delicateShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//listen for SIGINT emmited on application termination

process.on('SIGINT', function () {
    delicateShutdown('app is terminated', function () {
        process.exit(0);
    });
});

//listen for SIGTERM emmited when HEROKU shuts down process

process.on('SIGTERM', function () {
    delicateShutdown("Heroku has terminated app ", function () {
        process.exit(0);
    });
});

// adding the schema files
require('./resumes');
require('./users');

