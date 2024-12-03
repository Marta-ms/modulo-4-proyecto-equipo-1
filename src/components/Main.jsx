import Preview from "./Preview";
import Form from "./Form";

function Main({
  onChangeInput,
  formInfo,
  formImages,
  changeAuthorPhoto,
  formImageProyect,
  changeProjectPhoto,
  postCardToApi,
  dataApi,
}) {
  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
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
        postCardToApi={postCardToApi}
        formInfo={formInfo}
        dataApi={dataApi}
      />
    </main>
  );
}

export default Main;
