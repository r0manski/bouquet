'use strict';

var mongoose = require ('mongoose');

// declaring schema for resume

var resumeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    birth: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, "default": "N/A"},
    city: {type: String, "default": "N/A"},
    suburb: {type: String, "default": "N/A"},
    addr1: {type: String, "default": "N/A"},
    addr2: {type: String, "default": "N/A"},
    email: {type: String, "default": "N/A"},
    phoneNumber: {type: String, "default": "N/A"},
    desiredPosition: {type: String, "default": "N/A"},
    desiredSalary: {type: String, "default": "N/A"},
    startWork: {type: String, "default": "N/A"},
    endWork: {type: String, "default": "N/A"},
    workPlace: {type: String, "default": "N/A"},
    workPosition: {type: String, "default": "N/A"},
    workAchievement: {type: String, "default": "N/A"},
    eduInstitution: {type: String, "default": "N/A"},
    eduDepartment: {type: String, "default": "N/A"},
    eduSpecialization: {type: String, "default": "N/A"},
    eduGraduation: {type: String, "default": "N/A"}
});

//compiling model of Resume from a schema

mongoose.model('Resume', resumeSchema);
