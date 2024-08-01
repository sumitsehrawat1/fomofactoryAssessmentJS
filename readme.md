# Coin Tracker Node.js Application

## Overview

This is an Express application designed to collect and store cryptocurrency quotes from the CoinMarketCap API. The application uses a scheduled job to fetch data at regular intervals and stores the results in a MongoDB database.

## Prerequisites

- Node.js 16 or later
- npm (Node Package Manager)
- MongoDB

## Setup

1. **Clone the Repository**

   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies**

   Run the following command to install the required npm packages:

   npm install

4. **Run the Application**

   Start the application using:

   npm start

   This will start the Express server and initiate the scheduled job for collecting quotes.

## Scheduling

The application uses `node-schedule` for in-process scheduling.

## Development and Contribution

Feel free to submit issues or pull requests to improve the application. For major changes, please open an issue first to discuss what you would like to change.
