/* GET user info */
const userInfo = function(req, res) {
    res.render('index', { title: 'User info' });
};

module.exports = {
    userInfo
};