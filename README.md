# Currency Converter API

A lightweight and efficient RESTful API for real-time currency conversion, built with Node.js and Express.  
It uses live exchange rates from [exchangerate.host](https://exchangerate.host) and includes caching for performance optimization.

The API is live and hosted on **Vercel**, making it easy to test and integrate into your applications.

---

## Features

- Convert an amount from one currency to another using real-time exchange rates.
- Accepts:
  - `amount`: Numeric value to convert
  - `from`: Source currency code (e.g., `USD`)
  - `to`: Target currency code (e.g., `INR`)
- Retrieves live rates via [exchangerate.host](https://exchangerate.host).
- Caches exchange rates for **1 hour** using `node-cache` to minimize external API requests.
- Returns the converted amount along with rate and currency details.

---

## Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework for handling API routes
- **Axios** – For making HTTP requests to the exchange rate API
- **Node-Cache** – To cache exchange rates and reduce redundant requests
- **dotenv** – For managing environment variables

---

## API Endpoint

### `GET /api/convert`

#### Query Parameters:

| Parameter | Type   | Description                          | Example         |
|-----------|--------|--------------------------------------|-----------------|
| `amount`  | Number | Amount to convert                    | `100`           |
| `from`    | String | Source currency code (ISO 4217)      | `USD`           |
| `to`      | String | Target currency code (ISO 4217)      | `INR`           |
