const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ 
  secret: "Este es mi session de la pagina", 
  resave: false,
  saveUninitialized: false,
}));
app.use(cookies());

// INDEX 
app.use('/', mainRoutes);
// LOGIN & REGISTER 
app.use('/users', userRoutes);
// CART, DETAIL, CREATE & MODIFY
app.use('/products', productRoutes);

// 404 REDIRECT
app.use((req, res, next) => {
  res.status(404).render('404', { styles: "404" });
});

app.listen(PORT, () => {
  console.log(`App listening and running in http://localhost:${PORT}`);
});
