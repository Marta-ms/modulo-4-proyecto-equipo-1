import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function ProyectList({ projectsList }) {
  const usersElements = projectsList.map((project) => {
    return <Card key={project.name} projectData={project} />;
  });
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
          <ul>{usersElements}</ul>
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default ProyectList;
