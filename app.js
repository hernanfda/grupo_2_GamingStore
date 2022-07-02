const { Router } = require("express");
const express = require("express");
const app = express();
const path = require("path");
/*Aca requiero el controllador y Router, despues de los requires ya hechos*/
const router = express.Router();
const controllerAddProducts = require("./views/controllers/controllerAddProduct")

PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});
app.get("/product_detail_keyboard", (req, res) => {
  res.sendFile(__dirname + "/views/product_detail_keyboard.html");
});

app.get("/product_detail_keyboard_logitech", (req, res) => {
  res.sendFile(__dirname + "/views/product_detail_keyboard_logitech.html");
});

app.get("/product_detail_keyboard_redragon", (req, res) => {
  res.sendFile(__dirname + "/views/product_detail_keyboard_redragon.html");
});


app.get("/product-cart", (req, res) => {
  res.sendFile(__dirname + "/views/product-cart.html");
});

/*Agrego mi parte a partir de acá */
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/addProducts", controllerAddProducts.addProducts);

app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`);
});
