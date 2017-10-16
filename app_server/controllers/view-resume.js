'use strict';

//Get view-resume page

module.exports.viewResume = function (req, res) {
    var resumeid = req.params.resumeid;
    res.render('view-resume', { resumeid: resumeid });
};
