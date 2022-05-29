const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

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
app.get('/product', (req, res) => {
  res.sendFile(__dirname + '/views/product.html')
})



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})