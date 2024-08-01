const express = require('express');
const mongoose = require('mongoose');
const { collectQuote } = require('./helpers/quoteHelper');
const { mongoUri } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Schedule the quote collection every minute
const schedule = require('node-schedule');
schedule.scheduleJob("*/5 * * * * *", collectQuote);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
