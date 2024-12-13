//importar librerias
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//crear el servidor
const server = express();

//necesito que mi servidor acepte peticiones
server.use(cors());

server.use(express.json({ limit: "25mb"}));


async function getDBConnection() {
    const connection = await mysql.createConnection({
        // configuración
        host: "c2dnm.h.filess.io",
        user: "ProyectoModulo4_teachface",
        password: "497c301336f495cafac27ef58cc33c4ee109aede",
        database: "ProyectoModulo4_teachface",
        port: "3307"
    })
    connection.connect();
    return connection;
  }



//establecer puerto de conexion
const port = 3307;
server.listen(port, () => {
    console.log(`Server is running, go to http://localhost:${port}`);

})

//enpoint
server.get("/api/projects", async (req, res) => {
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM author INNER JOIN proyects ON author.idAuthor = proyects.fk_author";
    const [result] = await connection.query(sqlQuery);
    
    connection.end();

    res.status(200).json({ 
        status: "succes",
        message: result
    });

})


async function getAuthors() {
    const response = await fetch("http://localhost:3307/api/projects");
    const dataAuthors = await response.json();
    authorsList = dataAuthors.message;
    renderAuthor();
}

getAuthors();



//servidor ficheros estaticos
const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));



// server.get("/projects/list", (request, response) => {
//     response.status(200).json({ succes: true, result: projects })
// })