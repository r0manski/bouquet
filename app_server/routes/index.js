var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlSearchResult = require('../controllers/search-result');
var ctrlViewResume = require('../controllers/view-resume');
var ctrlCreateResume = require('../controllers/create-resume');
var ctrlSignIn = require('../controllers/sign-in');
var ctrlRegister = require('../controllers/register');
var ctrlSignInSuccess = require('../controllers/sign-in-success');
var ctrlRegisterSuccess = require('../controllers/register-success');

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
router.get('/sign-in', ctrlSignIn.login);

/* Post sign-in page. */
router.post('/sign-in', ctrlSignIn.doLogin);

/* GET sign-in-success page */
router.get('/sign-in-success', ctrlSignInSuccess.loginSuccess);

/* GET registration page. */
router.get('/register', ctrlRegister.register);

/* POST registration page. */
router.post('/register', ctrlRegister.doRegister);

/* GET register-success page */
router.get('/register-success', ctrlRegisterSuccess.registerSuccess);

module.exports=router;
