import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { Link } from "react-router-dom";

function ProyectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4001/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener proyectos");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "succes") {
          setProjects(data.message); // Aquí almacenas los proyectos
        } else {
          throw new Error(data.message || "Error desconocido");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container-projectsList">
      <Header />
      <main className="hero">
        <h1 className="title">Proyectos Molones</h1>
        <h4 className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </h4>
        <Link className="button--link" to="/home">
          NUEVO PROYECTO
        </Link>
        {/* <button className="button--link">NUEVO PROYECTO</button> */}
        <div>
          <ul className="js_list">
            {projects.map((project, index) => (
              <Card key={index} projectData={project} />
            ))}
          </ul>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default ProyectList;
