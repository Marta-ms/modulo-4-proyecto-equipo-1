//importar librerias
const express = require("express");
const cors = require("cors");

//crear el servidor
const server = express();

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

const projects = [
    {
        name: "PS Management",
        slogan: "#superviviente",
        repo: "www.lapaca.com",
        demo: "www.lapaca.com",
        technologies: "Fashion-victim",
        desc: "Pideme lo que quieras",
        autor: "Paquita",
        job: "Señora niña bonita",
        photo: "perfil-usuaria.jpg",
    },
    {
        name: "Kriss proyecto",
        slogan: "#mercenario",
        repo: "www.sueños.com",
        demo: "www.sueños.com",
        technologies: "dream-victim",
        desc: "Soñar es gratis",
        autor: "Kriss",
        job: "programadora de sueños",
        photo: "perfil-usuaria.jpg",
    }
]

server.get("/projects/list", (request, response) => {
    response.status(200).json({ succes: true, result: projects })
})