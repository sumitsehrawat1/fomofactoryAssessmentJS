const CRYPTO = {
  BTC: 'BTC',
  ETH: 'ETH',
  USDT: 'USDT',
  BNB: 'BNB',
  SOL: 'SOL'
};

const allSymbols = Object.values(CRYPTO);

function convertToCrypto(symbol) {
    if (Object.values(CRYPTO).includes(symbol)) {
      return symbol;
    }
    throw new Error(`Unknown cryptocurrency symbol: ${symbol}`);
  }

module.exports = {
    CRYPTO,
    allSymbols,
    convertToCrypto
};
