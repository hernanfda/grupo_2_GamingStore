const express = require('express')
const app = express()
const path = require('path')
PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

//aca iran las rutas 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
