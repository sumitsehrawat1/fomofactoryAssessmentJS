const CRYPTO = require('./enums/crypto');

console.log('All Symbols:', CRYPTO.getAllSymbols());
console.log('Convert BTC:', CRYPTO.convertToCrypto('BTC'));
console.log('Convert XYZ:', CRYPTO.convertToCrypto('XYZ'));
