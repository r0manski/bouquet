//Get create resume page

module.exports.viewResume = function (req, res) {
    res.render('view-resume', {title: 'Create a resume'});
};