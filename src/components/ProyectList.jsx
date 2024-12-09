import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function ProyectList({ formInfo, postCardToApi, dataApi }) {
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
          <Card
            formInfo={formInfo}
            postCardToApi={postCardToApi}
            dataApi={dataApi}
          />
        </div>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default ProyectList;
