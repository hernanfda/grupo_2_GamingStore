const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use('/', mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);


// app.get("/product_detail_keyboard_logitech", (req, res) => {
//   res.sendFile(__dirname + "/views/product_detail_keyboard_logitech.html");
// });

// app.get("/product_detail_keyboard_redragon", (req, res) => {
//   res.sendFile(__dirname + "/views/product_detail_keyboard_redragon.html");
// });


app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`);
});
