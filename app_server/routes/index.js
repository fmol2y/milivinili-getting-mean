const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/userController');
const ctrlOthers = require('../controllers/othersController');
const ctrlVinylsArtists = require('../controllers/vinylArtistController');
const ctrlExchange = require('../controllers/exchangeController');
const ctrlHome = require('../controllers/homeController');
/* GET home page. */
router.get('/', ctrlHome.index);

/* Vinyl & artist related pages */
router.get('/vinyls', ctrlVinylsArtists.vinylList);
router.get('/vinyls/vinyl', ctrlVinylsArtists.vinylInfo);
router.get('/artists', ctrlVinylsArtists.artistInfo);
router.get('/artists/artist', ctrlVinylsArtists.artistInfo);

/* Exchange related pages */
router.get('/exchanges', ctrlExchange.exchangeList);
router.get('/exchanges/exchange', ctrlExchange.exchangeInfo);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;