import Header from "./Header";
import Footer from "./Footer";




function ProyectList() {
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
          <p>Nombre del proyecto:</p>
          <p>Descripción:</p>
          <p>Tecnologías que usa:</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default ProyectList;
