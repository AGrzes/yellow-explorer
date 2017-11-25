const axios = require('axios')
const _ = require('lodash')
const metadata = require('yellow/src/metadata/main')
module.exports = axios.get('/metadata').then((response) => new metadata.Metadata(response.data))
