# Currency Converter API

This project provides a simple RESTful API to convert amounts from one currency to another using live exchange rates from ####exchangerate.host.

## Features

- Accepts amount, source currency code, and target currency code.
- Retrieves the current exchange rate using a third-party API.
- Caches exchange rates for 1 hour to reduce API calls.
- Returns the converted amount along with rate details.

## Technologies Used

- Node.js
- Express.js
- Axios (for HTTP requests)
- Node-Cache (for caching)
- dotenv (for environment variables)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
