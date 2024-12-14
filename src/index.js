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


server.post("/api/projects", async (req, res) => {
            
    const connection = await getDBConnection();
    const info = req.body;
    console.log("Datos que me envía frontend: ", info);
    
    const queryAuthor = "INSERT INTO author (name, job, photo) VALUES (?, ?, ?)";
    const [result] = await connection.query(queryAuthor, [
        info.name,
        info.job,
        info.photo
    ]);

    const queryProject = "INSERT INTO proyects (title, slogan, description, technology, demo, repository, image, fk_author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [projectResult] = await connection.query(queryProject, [
        info.title,
        info.slogan,
        info.desc,
        info.technologies,
        info.demo,
        info.repo,
        info.image,
        result.insertId
    ]);

    connection.end();

    console.log("Resultado de la query: ", result);
    res.status(201).json({
        status: "success",
        cardUrl: ""
    });
})


server.get("/api/projects", async (req, res) => {
    const name = req.query.name;
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM author INNER JOIN proyects ON author.idAuthor = proyects.fk_author";
    const [result] = await connection.query(sqlQuery, [name]);
    
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


//servidor ficheros estaticos
const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));



// server.get("/projects/list", (request, response) => {
//     response.status(200).json({ succes: true, result: projects })
// })