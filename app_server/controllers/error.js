'use strict';

//Get error page

module.exports.error = function (req, res) {
    var errorid = req.params.errorid;
    res.render('error', { errorid: errorid });
};
