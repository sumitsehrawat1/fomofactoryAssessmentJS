require('dotenv').config();

module.exports = {
  collectorBaseUrl: process.env.COIN_MARKET_CAP_BASE_URL,
  collectorQuoteEndpoint: process.env.COIN_MARKET_CAP_GET_QUOTE_BY_SYMBOL_ENDPOINT,
  collectorApiKey: process.env.COIN_MARKET_CAP_API_KEY,
  mongoUri: process.env.MONGO_URI,
};
  