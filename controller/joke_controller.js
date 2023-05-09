const axios = require('axios');

const API_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';
const API_HEADERS = {
  'x-rapidapi-key': process.env.API_KEY,
  'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
  'useQueryString': true
};

const getRandomDadJoke = async (req, res, next) => {
  try {
    const request = await axios.get(API_URL, { headers: API_HEADERS });
    const joke =`setup: ${request.data.body[0].setup}, \npunchline: ${request.data.body[0].punchline}`;
    res.json({ joke });
  } catch (error) {
    next( new Error ('failed to get joke'));
  }
};

module.exports = {
  getRandomDadJoke,
};

