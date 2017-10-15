'use strict';

//Get success page

module.exports.success = function (req, res) {
    var successid = req.params.successid;
    res.render('success', { successid: successid });
};
