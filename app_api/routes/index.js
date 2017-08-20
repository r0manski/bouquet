var express = require('express');
var router = express.Router();
var ctrlResumes = require('../controllers/resumes');

// routes for Resumes

router.get('/resumes', ctrlResumes.resumesList);
router.post('/resumes', ctrlResumes.resumesCreate);
router.get('/resumes/:resumeid', ctrlResumes.resumesReadOne);
router.put('/resumes/:resumeid', ctrlResumes.resumesUpdateOne);
router.delete('/resumes/:resumeid', ctrlResumes.resumesDeleteOne);

module.exports=router;