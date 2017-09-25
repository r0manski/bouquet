var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload' //define property on req to be payload
});
var ctrlMain = require('../controllers/main');
var ctrlSearchResult = require('../controllers/search-result');
var ctrlViewResume = require('../controllers/view-resume');
var ctrlCreateResume = require('../controllers/create-resume');
var ctrlSignIn = require('../controllers/sign-in');
var ctrlRegister = require('../controllers/register');

/* GET create resume page. */
router.get('/create-resume', auth, ctrlCreateResume.createResume);

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

/* GET registration page. */
router.get('/register', ctrlRegister.register);

/* POST registration page. */
router.post('/register', ctrlRegister.doRegister);

module.exports=router;
