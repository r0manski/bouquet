var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload' //define property on req to be payload
});
var ctrlUsers = require('../controllers/users');
var ctrlMain = require('../controllers/main');
var ctrlSearchResult = require('../controllers/search-result');
var ctrlViewResume = require('../controllers/view-resume');
var ctrlCreateResume = require('../controllers/create-resume');
var ctrlSignIn = require('../controllers/sign-in');
var ctrlRegister = require('../controllers/register');
var ctrlSignInSuccess = require('../controllers/sign-in-success');
var ctrlRegisterSuccess = require('../controllers/register-success');
var ctrlCreateResumeSuccess = require('../controllers/create-resume-success');


/* GET create resume page. */
router.get('/create-resume', ctrlCreateResume.createResume);

/* POST create resume page. */
router.post('/create-resume', ctrlCreateResume.doCreateResume);

/* GET create resume page. */
router.get('/view-resume', ctrlViewResume.viewResume);

/* GET create resumes list. */
router.get('/search-result', ctrlSearchResult.searchResult);

/* GET create-resume-success page */
router.get('/create-resume-success', ctrlCreateResumeSuccess.createResumeSuccess);

/* GET resume page */
router.get('/resumes/:resumeid', ctrlUsers.profile);

/* GET user page */
router.get('/users/:username', ctrlUsers.profile);

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
