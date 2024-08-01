const axios = require('axios');
const QuoteHistory = require('../models/quoteHistory');
const config = require('../config');
const constants = require('../constants');
const CRYPTO = require('../enums/crypto');

async function collectQuote() {
  const pollId = new Date().toISOString();
  try {
    console.log(`Quotes Collection began for pollId: ${pollId}`);

    const url = buildUrl();
    const response = await axios.get(url, { headers: { [constants.AUTH_HEADER_KEY]: config.collectorApiKey } });
    const responseDTO = response.data;

    if (responseDTO.status.error_code === 0) {
      await saveQuoteHistory(responseDTO, pollId);
      console.log(`Quotes successfully collected for pollId: ${pollId}`);
    } else {
      console.error(`Error from API, pollId: ${pollId}, error: ${responseDTO.status.error_message}`);
      throw new Error(responseDTO.status.error_message);
    }
  } catch (error) {
    console.error(`Exception occurred while collecting quotes for pollId: ${pollId}`, error);
  }
}

function buildUrl() {
  const symbols = CRYPTO.allSymbols.join(constants.SYMBOL_SEPARATOR);
  return `${config.collectorBaseUrl}${config.collectorQuoteEndpoint}?${constants.SYMBOL}=${symbols}`;
}

async function saveQuoteHistory(responseDTO, pollId) {
  const promises = Object.entries(responseDTO.data).map(async ([symbol, cryptoData]) => {
    try {
        const crypto = CRYPTO.convertToCrypto(symbol);

        const quoteHistory = new QuoteHistory({
            crypto,
            responseData: cryptoData,
            createdAt: new Date(),
            pollId
        });

        await quoteHistory.save();
    } catch (error) {
        console.error(`Error in saveQuoteHistory for , symbol : ${symbol}, pollId: ${pollId}, error: ${responseDTO.status.error_message}`);
    }
  });

  await Promise.all(promises);
}

module.exports = { collectQuote };
