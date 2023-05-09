const express = require('express');
const { getRandomDadJoke } = require('../controller/joke_controller');

const router = express.Router();

router.get('/random-joke', getRandomDadJoke);

module.exports = router;




