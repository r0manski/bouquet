//Get view-resume page

module.exports.viewResume = function (req, res) {
    resumeid = req.param.resumeid;
    res.render('view-resume', { resumeid: resumeid });
};
