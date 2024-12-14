import React { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function ProyectList() {

  const [projects, setProjects] = useState([]);

    useEffect(() => {
      const fetchProjects = async () => {
        try { 
        const response = await fetch("http://localhost:3307/api/projects");
        const dataAuthors = await response.json();
        setProjects(dataAuthors.message);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    };


  fetchProjects();
}, []);

return (
    <div className="container-projectsList">
      <Header />
      <main className="hero">
        <h1 className="title">Proyectos Molones</h1>
        <h4 className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </h4>
        <button className="button--link">NUEVO PROYECTO</button>
        <div>
          <ul className="js_list">{projects.map((project, index) => (
            <Card key={index} projectData={project} />
          ))}</ul>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default ProyectList;
