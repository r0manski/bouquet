var express = require('express');
var router = express.Router();
var ctrlCreateResume = require('../controllers/create-resume');

/* GET create resume page. */
router.get('/', ctrlCreateResume.createResume);

module.exports = router;
