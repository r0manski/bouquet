//Get view-resume page

module.exports.viewResume = function (req, res) {
    resumeid = req.params.resumeid;
    res.render('view-resume', { resumeid: resumeid });
};
