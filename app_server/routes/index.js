const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/userController');
const ctrlOthers = require('../controllers/othersController');
const ctrlVinyls = require('../controllers/vinylController');
const ctrlArtists = require('../controllers/artistController');
const ctrlExchange = require('../controllers/exchangeController');
const ctrlHome = require('../controllers/homeController');
/* GET home page. */
router.get('/', ctrlHome.index);

/* Vinyl related pages */
router.get('/vinyls', ctrlVinyls.vinylList);
router.get('/vinyls/vinyl', ctrlVinyls.vinylInfo);
router.get('/vinyls/new', ctrlVinyls.vinylAdd);

/* Artist related pages */
router.get('/artists', ctrlArtists.artistList);
router.get('/artists/artist', ctrlArtists.artistInfo);
router.get('/artists/new', ctrlArtists.artistAdd);

/* Exchange related pages */
router.get('/exchanges', ctrlExchange.exchangeList);
router.get('/exchanges/exchange', ctrlExchange.exchangeInfo);
router.get('/exchanges/new', ctrlExchange.exchangeAdd);

/* User related pages */
router.get('/user', ctrlUser.userInfo);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;