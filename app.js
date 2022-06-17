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
app.get('/product_detail_keyboard', (req, res) => {
  res.sendFile(__dirname + '/views/product_detail_keyboard.html')
})

app.get('/product_detail_keyboard_logitech', (req, res) => {
  res.sendFile(__dirname + '/views/product_detail_keyboard_logitech.html')
})

app.get('/product_detail_keyboard_redragon', (req, res) => {
  res.sendFile(__dirname + '/views/product_detail_keyboard_redragon.html')
})
app.get('/product-cart', (req, res) => {
  res.sendFile(__dirname + '/views/product-cart.html')
})

app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`)
})
