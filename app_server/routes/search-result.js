var express = require('express');
var router = express.Router();
var ctrlSearchResult = require('../controllers/search-result');

/* GET create resume page. */
router.get('/', ctrlSearchResult.searchResult);

module.exports = router;
