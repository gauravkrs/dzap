const express = require('express')
const router = express.Router()
const cryptoCurrencyController = require('../controllers/cryptoCurrencyController')

// Endpoint to fetch top cryptocurrencies and supported currencies
router.get('/cryptoCurrencies', cryptoCurrencyController.getCryptoCurrencies);

// Endpoint for currency conversion
router.post('/cryptoConvert', cryptoCurrencyController.convertCurrency);


module.exports = router
