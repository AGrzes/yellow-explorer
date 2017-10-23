const httpPort = process.env.HTTP_PORT || 3000
const express = require('express')
const app = express()

app.use(express.static('static'))
app.use(express.static('generated'))

app.listen(httpPort, function () {
  console.log(`Example app listening on port ${httpPort}!`)
})
