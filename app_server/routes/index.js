'use strict';

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
var ctrlEditResume = require('../controllers/edit-resume');
var ctrlError = require('../controllers/error');
var ctrlSuccess = require('../controllers/success');

/* GET create resume page */
router.get('/create-resume', ctrlCreateResume.createResume);

/* POST create resume page */
router.post('/create-resume', auth, ctrlCreateResume.doCreateResume);

/* GET view resume page */
router.get('/view-resume/:resumeid', ctrlViewResume.viewResume);

/* GET create resumes list */
router.get('/search-result', ctrlSearchResult.searchResult);

/* GET user page */
router.get('/users/:username', ctrlUsers.profile);

/* GET admin page */
router.get('/admin/:username', ctrlUsers.adminProfile);

/* GET home page */
router.get('/', ctrlMain.index);

/* GET sign-in page */
router.get('/sign-in', ctrlSignIn.login);

/* Post sign-in page */
router.post('/sign-in', ctrlSignIn.doLogin);

/* GET registration page */
router.get('/register', ctrlRegister.register);

/* POST registration page */
router.post('/register', ctrlRegister.doRegister);

/* GET search-result page (based on search keywords) */
router.get('/search-result/:keyword', ctrlSearchResult.search);

/* GET edit-resume page */
router.get('/edit-resume/:resumeid', ctrlEditResume.editResume);

/* UPDATE edit-resume page */
router.post('/edit-resume', auth, ctrlEditResume.doEditResume);

/* GET error page */
router.get('/error/:errorid', ctrlError.error);

/* GET success page */
router.get('/success/:successid', ctrlSuccess.success);

module.exports=router;
