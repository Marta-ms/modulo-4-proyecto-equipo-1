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
    try {
    const connection = await mysql.createConnection({
        // configuración
        host: "c2dnm.h.filess.io",
        user: "ProyectoModulo4_teachface",
        password: "497c301336f495cafac27ef58cc33c4ee109aede",
        database: "ProyectoModulo4_teachface",
        port: "3307"
    });

    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    console.log("Conexión exitosa", rows);
    return connection;
} catch (error) {
    console.error("Error conectando la base de datos", error.message);
    throw error;
}
}
getDBConnection();



//establecer puerto de conexion
const port = 3307;
server.listen(port, () => {
    console.log("Server is listening in http://localhost:" + port);

});

//enpoint
server.get("/api/projects", async (req, res) => {
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM author INNER JOIN proyects ON author.idAuthor = proyects.fk_author";
    const [result] = await connection.query(sqlQuery);
    
    connection.end();

    if (result.length === 0) {
        res.status(404).json({
            status: "error",
            message: "no se encontró nada"
        })
    } else {
        res.status(200).json({ 
            status: "succes",
            message: result
        });
    }
})

server.post("/api/projects", async (req, res) => {
    try {
        const { name, slogan, repo, demo, technologies, desc, autor, job, image, photo } = req.body;
        if (!name || !autor) {
            return res.status(400).json({
                status: "error",
                message: "Nombre del proyecto y autor son obligatorios",
            });
        }
        
    const connection = await getDBConnection();
    const [authorResult] = await connection.query(
        "INSERT INTO author (name, job, photo) VALUES (?, ?, ?)",
        [autor, job, photo]
    );
    const authorId = authorResult.insertId;
    const [projectResult] = await connection.query(
        "INSERT INTO proyects (title, slogan, description, technology, demo, repository, image, fk_author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [name, slogan, desc, technologies, demo, repo, image, authorId]
    );

    connection.end();


    res.status(201).json({
        status: "success",
        projectId: projectResult.insertId,
    });
} catch (error) {
    console.error("Error creando el proyecto:", error.message);
    res.status(500).json({
      status: "error",
      message: "Error interno del servidor",
    });
}
})

server


//servidor ficheros estaticos
const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));



// server.get("/projects/list", (request, response) => {
//     response.status(200).json({ succes: true, result: projects })
// })