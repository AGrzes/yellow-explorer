const yaml = require('js-yaml')
const fs = require('fs')
const httpPort = process.env.HTTP_PORT || 3000
const express = require('express')
const app = express()
const config = yaml.load(fs.readFileSync(process.argv[2],'UTF-8'))
const data = yaml.load(fs.readFileSync(process.argv[3],'UTF-8'))
app.get('/config',(req,res)=>{
  res.send(config)
})
app.get('/data',(req,res)=>{
  res.send(data)
})
app.use(express.static('static'))
app.use(express.static('generated'))

app.listen(httpPort, function () {
  console.log(`Example app listening on port ${httpPort}!`)
})
