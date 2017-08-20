//Get create sign-in page

module.exports.signIn = function (req, res) {
    res.render('sign-in', {title: 'Sign-in'});
};