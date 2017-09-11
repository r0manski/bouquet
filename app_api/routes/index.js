var express = require('express');
var router = express.Router();
var ctrlResumes = require('../controllers/resumes');
var ctrlAuth = require('../controllers/authentication');

// routes for Resumes

router.get('/resumes', ctrlResumes.resumesList);
router.post('/resumes', ctrlResumes.resumesCreate);
router.get('/resumes/:resumeid', ctrlResumes.resumesReadOne);
router.put('/resumes/:resumeid', ctrlResumes.resumesUpdateOne);
router.delete('/resumes/:resumeid', ctrlResumes.resumesDeleteOne);

// routes for Authentication

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports=router;