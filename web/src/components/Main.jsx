import Preview from "./Preview";
import Form from "./Form";
import { Link } from "react-router-dom";


function Main({
  onChangeInput,
  formInfo,
  formImages,
  changeAuthorPhoto,
  formImageProyect,
  changeProjectPhoto,
  handleSaveProject,
  urlProject,
}) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        
        <Link className="button--link" to="/proyectList">Ver proyectos
        {/* <a className="button--link" href="./home/proyects">Ver proyectos</a> */}
        </Link>
      </section>
      <Preview
        personalInfo={formInfo}
        // changeAuthorPhoto={changeAuthorPhoto}
        // changeProjectPhoto={changeProjectPhoto}
      />
      <Form
        onChangeInput={onChangeInput}
        formImages={formImages}
        formImageProyect={formImageProyect}
        formInfo={formInfo}
        handleSaveProject={handleSaveProject}
        urlProject={urlProject}
      />
    </main>
  );
}

export default Main;
