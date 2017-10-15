//Get error page

module.exports.error = function (req, res) {
    errorid = req.params.errorid;
    res.render('error', { errorid: errorid });
};
