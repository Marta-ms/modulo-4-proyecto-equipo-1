import "../scss/layout/ProyectList.scss";
import Header from "./Header";
import Footer from "./Footer";


function ProyectList() {
  return (
    <>
      <Header />
      <main>
        <h1>Proyectos Molones</h1>
        <h4>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h4>
        <button>NUEVO PROYECTO</button>
        <div>
          <p>Nombre del proyecto:</p>
          <p>Descripción:</p>
          <p>Tecnologías que usa:</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <Footer />
    </>
  );
}

export default ProyectList;
