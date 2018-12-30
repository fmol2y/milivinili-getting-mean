/* GET 'about' page */
const about = function(req, res) {
    res.render('generic-text', { 
        title: 'About',
        content: 'Mili Vinili je kreiran s namerom da spoji ljubitelje vinila i muzike kako bi upotpunili svoje muzicke kolekcije'});
};

module.exports = {
    about
};