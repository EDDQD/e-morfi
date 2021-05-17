const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
})

app.listen(3030, () => {
    console.log("El servidor ya está corriendo en el puerto 3030.");
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"));
})