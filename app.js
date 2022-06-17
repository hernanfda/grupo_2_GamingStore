const express = require('express')
const app = express()
const path = require('path')
PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html')
})
app.get('/product-detail', (req, res) => {
  res.sendFile(__dirname + '/views/product-detail.html')
})
app.get('/product-cart', (req, res) => {
  res.sendFile(__dirname + '/views/product-cart.html')
})
app.get('/cart', (req, res) => {
  res.sendFile(__dirname + '/views/cart.html')
})

app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`)
})
