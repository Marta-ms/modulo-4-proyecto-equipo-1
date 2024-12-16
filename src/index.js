//importar librerias
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//así podemos usar la variable de estado
require("dotenv").config();

//para usar motor de plantillas
server.set("view engine", "ejs");

//crear el servidor
const server = express();

//necesito que mi servidor acepte peticiones
server.use(cors());

server.use(express.json({ limit: "25mb" }));


async function getDBConnection() {
    try {
        const connection = await mysql.createConnection({
            // configuración
            host: "c2dnm.h.filess.io",
            user: "ProyectoModulo4_teachface",
            password: process.env.PASSWORD_DB,
            database: "ProyectoModulo4_teachface",
            port: process.env.PORT
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
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Server is listening in http://localhost:" + port);

});

//enpoint

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

server.post("/api/projects", async (req, res) => {

    const connection = await getDBConnection();
    const info = req.body;
    console.log("Datos que me envía frontend: ", info);

    const queryAuthor = "INSERT INTO author (name, job, photo) VALUES (?, ?, ?)";
    const [result] = await connection.query(queryAuthor, [
        info.autor,
        info.job,
        info.photo
    ]);

    const queryProject = "INSERT INTO proyects (title, slogan, description, technology, demo, repository, image, fk_author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [projectResult] = await connection.query(queryProject, [
        info.name,
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
        cardUrl: `http://localhost:3307/detail/${projectResult.insertId}`,
    });
})

//motor de plantillas --> renderizar una pag web que sea el detalle del proyecto
server.get("detail/:idProyect", async (req, res) => {
    //     /*
    //         -recoger el id que me envía frontend
    const idNewAuthor = autorResult.insertId; //id del autor que se acaba de añadir

    //         -conectarme a la bbdd
    //         -buscar en mi base de datos las info del proyecto con su autor
    //         -finalizar la conexión con la bbdd
    //         -responder a frontend --> renderizar la página web
    //     */

    const id = req.params.idProyect;
    const connection = await getDBConnection();
    const query = "SELECT * FROM author INNER JOIN proyects ON proyects.fk_author = author.idAuthor WHERE proyect.id = ?";

    const [result] = await connection.query(query, [id]);

    //     /* 
    //     Crear carpeta views y fichero detailProject.ejs
    //     escribir con sitaxis raruna pa recoger la info

    //     */

    res.render("detailProject", { project: result[0] })
})



//servidor ficheros estaticos
const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));



// server.get("/projects/list", (request, response) => {
//     response.status(200).json({ succes: true, result: projects })
// })