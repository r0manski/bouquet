'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload' //define property on req to be payload
});
var ctrlResumes = require('../controllers/resumes');
var ctrlAuth = require('../controllers/authentication');
var ctrlTwitter = require('../controllers/twitter');

// routes for Resumes
router.get('/resumes', ctrlResumes.resumesList);
router.post('/resumes', auth, ctrlResumes.resumesDoCreate);
router.get('/resumes/:resumeid', ctrlResumes.resumesReadOne);
router.put('/resumes/:resumeid', auth, ctrlResumes.resumesUpdateOne);
router.delete('/resumes/:resumeid', auth, ctrlResumes.resumesDeleteOne);
router.post('/resumes/search', ctrlResumes.resumesSearch);

// routes for Authentication

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// routes for twitter

router.post('/twitter/:resumeid', ctrlTwitter.doTwit);

module.exports=router;

