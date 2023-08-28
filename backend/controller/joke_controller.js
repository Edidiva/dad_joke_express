const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const API_URL = 'https://dad-jokes.p.rapidapi.com/random/joke';
const API_HEADERS = {
  'x-rapidapi-key':process.env.API_KEY,
  'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
  'useQueryString': true
};

const getRandomDadJoke = async (req, res, next) => {
  try {
    const request = await axios.get(API_URL, { headers: API_HEADERS });
    // const joke =`setup: ${request.data.body[0].setup}, \npunchline: ${request.data.body[0].punchline}`;
    const setup = request.data.body[0].setup;
    const punchline = request.data.body[0].punchline;
    const joke = { setup, punchline };
    res.json({ joke });
  } catch (error) {
    console.log(error)
    next( new Error ('failed to get joke'));
  }
};

module.exports = {
  getRandomDadJoke
};