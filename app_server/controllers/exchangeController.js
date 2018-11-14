/* GET exchange list page */
const exchangeList = function(req, res) {
    res.render('index', { title: 'Exchanges List'});
};

/* GET exchange info page */
const exchangeInfo = function(req, res) {
    res.render('index', { title: 'Exchange Info'});
};

/* GET add exchange page */
const exchangeAdd = function(req, res) {
    res.render('index', { title: 'Add new exchange'});
};

module.exports = {
    exchangeList,
    exchangeInfo,
    exchangeAdd
};