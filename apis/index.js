// api/convert.js
const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600 }); // 1 hour cache

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { amount, from, to } = req.body;
  if (!amount || !from || !to) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const source = from.toUpperCase();
  const target = to.toUpperCase();
  const cacheKey = `${source}_${target}`;

  try {
    let rate = cache.get(cacheKey);

    if (!rate) {
      const response = await axios.get('https://api.exchangerate.host/latest', {
        params: { base: source, symbols: target }
      });

      if (!response.data?.rates?.[target]) {
        return res.status(400).json({ message: 'Invalid currency code or rate unavailable.' });
      }

      rate = response.data.rates[target];
      cache.set(cacheKey, rate);
    }

    const convertedAmount = amount * rate;
    return res.status(200).json({
      amount,
      from: source,
      to: target,
      rate,
      convertedAmount
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
