const express = require("express");
const app = express();
const path = require("path");
const method = require('method-override');
app.use(method('_method'));

app.use(express.static("public"));
app.set("view engine", "ejs");

const routesMain = require("./routes/main.js");
app.use("/", routesMain);

const routesAbout = require("./routes/about.js");
app.use("/about", routesAbout);

const routesProduct = require("./routes/product.js");
app.use("/product", routesProduct);

const routesAccount = require("./routes/account.js");
app.use("/account", routesAccount);

const routesCart = require("./routes/cart.js");
app.use("/cart", routesCart);

app.listen(3030, () => {
    console.log("El servidor ya está corriendo en el puerto 3030.");
})