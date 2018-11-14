/* GET artist list */
const artistList = function(req, res) {
    res.render('index', { title: 'Artists List'});
};

/* GET vinyl info */
const artistInfo = function(req, res) {
    res.render('index', { title: 'Artist Info'});
};

/* GET vinyl info */
const artistAdd = function(req, res) {
    res.render('index', { title: 'Add new artist'});
};

module.exports = {
    artistList,
    artistInfo,
    artistAdd
};