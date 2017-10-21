const httpPort = process.env.HTTP_PORT || 3000
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(httpPort, function () {
  console.log(`Example app listening on port ${httpPort}!`)
})
