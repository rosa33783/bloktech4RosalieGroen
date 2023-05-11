const express = require('express')
const app = express()

app.use('/static', express.static('static'))

app.get('/', function (req, res) {
  res.send('Hello World roos')
})

app.listen(3000)
