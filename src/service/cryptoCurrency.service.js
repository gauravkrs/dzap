const axios = require("axios");

const API_KEY = "4d676f9c-bf5d-4550-8584-d16be878299a";
const BASE_URL = "https://pro-api.coinmarketcap.com/v1";

const getCryptoCurrencies = async () => {
  try {
    // Fetch top cryptocurrencies and supported currencies
    const response = await axios.get(
      `${BASE_URL}/cryptocurrency/listings/latest`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
        params: {
          limit: 100,
        },
      }
    );
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("Failed to fetch cryptocurrencies", error);
    throw new Error("Failed to fetch cryptocurrencies");
  }
};

const convertCurrency = async (cryptocurrency, amount, targetCurrency) => {
  try {
    // Logic to convert currency using external API (CoinGecko, for example)
    const response = await axios.get(`${BASE_URL}/tools/price-conversion`, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
      params: {
        amount,
        symbol: cryptocurrency,
        convert: targetCurrency,
      },
    });
    console.log(response.data.data.quote[targetCurrency].price);
    return response.data.data.quote[targetCurrency].price;
  } catch (error) {
    console.log("Failed to convert currency", error);
    throw new Error("Failed to convert currency");
  }
};

module.exports = {
  getCryptoCurrencies,
  convertCurrency,
};
