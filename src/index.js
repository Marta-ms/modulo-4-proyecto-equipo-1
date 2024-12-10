//importar librerias
const express = require("express");
const cors = require("cors");

//crear el servidor
const server = expres();

//necesito que mi servidor acepte peticiones
server.use(cors());

//establecer puerto de conexion
const port = 5001;
server.listen(port, () => {
    console.log(`Server is running, go to http://localhost:${port}`);

})

//servidor ficheros estaticos
const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));