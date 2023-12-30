const axios = require('axios')

const BASE_URL = 'https://api.coingecko.com/api/v3'

const getCryptoCurrencies = async () => {
    try {
        // Fetch top cryptocurrencies and supported currencies
        const response = await axios.get(`${BASE_URL}/coins/markets`, {
            params: {
                vs_currency: 'usd',
                per_page: 100,
                order: 'market_cap_desc',
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch cryptocurrencies');
    }
}

const convertCurrency = async (cryptocurrency, amount, targetCurrency) => {
    try {
        // Logic to convert currency using external API (CoinGecko, for example)
        const response = await axios.get(`${BASE_URL}/simple/price`, {
            params: {
                ids: cryptocurrency,
                vs_currencies: targetCurrency,
            },
        });

        const rate = response.data[cryptocurrency][targetCurrency];
        console.log(rate)
        const convertedAmount = amount * rate;

        return convertedAmount;
    } catch (error) {
        throw new Error('Failed to convert currency');
    }
}

module.exports ={
    getCryptoCurrencies,
    convertCurrency
}