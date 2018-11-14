/* GET vinyl list */
const vinylList = function(req, res) {
    res.render('index', { title: 'Vinyl List'});
};

/* GET vinyl info */
const vinylInfo = function(req, res) {
    res.render('index', { title: 'Vinyl Info'});
};

/* GET vinyl info */
const vinylAdd = function(req, res) {
    res.render('index', { title: 'Add new vinyl'});
};

module.exports = {
    vinylList,
    vinylInfo,
    vinylAdd
};