var mongoose = require ('mongoose');

// declaring schema for resume

var resumeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    birth: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, "default": "not provided"},
    city: {type: String, "default": "not provided"},
    suburb: {type: String, "default": "not provided"},
    addr1: {type: String, "default": "not provided"},
    addr2: {type: String, "default": "not provided"},
    email: {type: String, "default": "not provided"},
    phoneNumber: {type: Number, "default": 0}
});

//compiling model from a schema
mongoose.model('Resume', resumeSchema);
