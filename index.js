const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const connection = require("./config/dataBase");

const router = require("./routes");

const app = express();
connection();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

//registrar rutas de proyecto
app.use("/api", router);

app.listen(8080, console.log("servicio iniciado en puerto 8080"));
