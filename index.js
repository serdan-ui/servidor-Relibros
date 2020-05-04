const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const connection = require("./config/dataBase");

const router = require("./routes");

//inicia app 
const app = express();
connection();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

//registrar rutas de proyecto

app.use("/api", router);


const port = process.env.PORT || 4000;

app.listen(port, '0.0.0.0' ,  () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
