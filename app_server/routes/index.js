var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlSearchResult = require('../controllers/search-result');
var ctrlViewResume = require('../controllers/view-resume');
var ctrlCreateResume = require('../controllers/create-resume');
var ctrlSignIn = require('../controllers/sign-in');
var ctrlRegister = require('../controllers/register');


/* GET create resume page. */
router.get('/create-resume', ctrlCreateResume.createResume);

/* POST create resume page. */
router.post('/create-resume', ctrlCreateResume.doCreateResume);

/* GET create resume page. */
router.get('/view-resume', ctrlViewResume.viewResume);

/* GET create resumes list. */
router.get('/search-result', ctrlSearchResult.searchResult);

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET sign-in page. */
router.get('/sign-in', ctrlSignIn.signIn);

/* GET registration page. */
router.get('/register', ctrlRegister.register);


module.exports=router;
