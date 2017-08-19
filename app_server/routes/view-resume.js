var express = require('express');
var router = express.Router();
var ctrlViewResume = require('../controllers/view-resume');

/* GET create resume page. */
router.get('/', ctrlViewResume.viewResume);

module.exports = router;
