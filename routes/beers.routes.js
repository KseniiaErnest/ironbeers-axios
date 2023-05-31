const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET route Home Page
router.get('/beers', (req, res, next) = {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/')
    .then((response) => {
        console.log(response.data);

    }).catch((err) => next(err))
});

module.exports = router;