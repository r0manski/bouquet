//Get create resume page

module.exports.createResume = function (req, res) {
    res.render('create-resume', {title: 'Create a resume'});
};