const mongoose = require('mongoose');

const quoteHistorySchema = new mongoose.Schema({
  crypto: {
    type: String,
    required: true
  },
  responseData: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  pollId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('QuoteHistory', quoteHistorySchema);