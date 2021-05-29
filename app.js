const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs");

const routesMain = require("./routes/main.js");
app.use("/", routesMain);

const routesAbout = require("./routes/about.js");
app.use("/about", routesAbout);

const routesProduct = require("./routes/product.js");
app.use("/producto", routesProduct);

const routesRegister = require("./routes/register.js");
app.use("/register", routesRegister);

const routesLogin = require("./routes/login.js");
app.use("/login", routesLogin);

const routesCart = require("./routes/cart.js");
app.use("/cart", routesCart);

app.listen(3030, () => {
    console.log("El servidor ya está corriendo en el puerto 3030.");
})