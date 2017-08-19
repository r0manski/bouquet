
//Get Home page

module.exports.index = function (req, res) {
    res.render('index', {title: 'bouQuet - Find your dream job'});
};