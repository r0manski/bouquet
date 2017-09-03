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
    phoneNumber: {type: Number, "default": 0},
    desiredPosition: {type: String, "default": "not provided"},
    desiredSalary: {type: Number, "default": 0},
    startWork: {type: Number, "default": 0},
    endWork: {type: Number, "default": 0},
    workPlace: {type: String, "default": "not provided"},
    workPosition: {type: String, "default": "not provided"},
    workAchievement: {type: String, "default": "not provided"},
    eduInstitution: {type: String, "default": "not provided"},
    eduDepartment: {type: String, "default": "not provided"},
    eduSpecialization: {type: String, "default": "not provided"},
    eduGraduation: {type: Number, "default": 0}
});

//compiling model from a schema
mongoose.model('Resume', resumeSchema);
