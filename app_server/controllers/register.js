/* GET registration page. */

module.exports.register = function(req, res) {
    res.render('register', { title: 'Registration' });
};