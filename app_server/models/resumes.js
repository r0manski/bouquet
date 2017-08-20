var mongoose = require ('mongoose');

// declaring schema for resume

var resumeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    birth: {type: String, required: true},
    country: {type: String, required: true},
    state: String,
    city: String,
    suburb: String,
    addr1: String,
    addr2: String,
    email: String,
    phoneNumber: Number
});

//compiling model from a schema
mongoose.model('Resume', resumeSchema);
