const axios = require('axios');

const getPhrases = axios.create({
    baseURL: 'https://fala-campeao.herokuapp.com/api/phrases'
});

module.exports = getPhrases;