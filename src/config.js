const axios = require('axios')
module.exports = axios.get('/config').then((response) => response.data)
