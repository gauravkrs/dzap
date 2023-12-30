const cryptoService = require('../service/cryptoCurrency.service');
const convertCurrency = async (req, res) => {
    try {
        // Logic to handle currency conversion
        const { cryptocurrency, amount, targetCurrency } = req.body;

        // Call a service function to perform the conversion
        const convertedAmount = await cryptoService.convertCurrency(cryptocurrency, amount, targetCurrency);

        res.json({ convertedAmount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCryptoCurrencies = async (req, res) => {
    try {
        // Logic to fetch top cryptocurrencies and supported currencies
        const cryptocurrencies = await cryptoService.getCryptoCurrencies();
        res.json({ cryptocurrencies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    convertCurrency,
    getCryptoCurrencies,
}