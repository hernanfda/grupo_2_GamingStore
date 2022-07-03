const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes');
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

// INDEX 
app.use('/', mainRoutes);
// LOGIN & REGISTER 
app.use('/users', userRoutes);
// CART, DETAIL, CREATE & MODIFY
app.use('/products', productRoutes);

//TODO: Agregar vista de detalle y lista de productos
// app.get("/product_detail_keyboard_logitech", (req, res) => {
//   res.sendFile(__dirname + "/views/product_detail_keyboard_logitech.html");
// });

// app.get("/product_detail_keyboard_redragon", (req, res) => {
//   res.sendFile(__dirname + "/views/product_detail_keyboard_redragon.html");
// });


app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`);
});
