import GetAvatar from "./GetAvatar";

function Form({ onChangeInput, formImages, formImageProyect }) {
  const handleChangeInput = (event) => {
    console.log(event.target.id);
    //recogemos valor de input y se pinta en la consola
    //console.log(value);
    onChangeInput(event.target.value, event.target.id); //value es la información que quiero enviar hacia App (la madre)
  };
  const handleChangePictureAuthor = (event) => {
    formImages(event);
  };
  const handleChangePictureProyect = (event) => {
    formImageProyect(event);
  };
  const handleSaveProject = (ev) => {
    ev.preventDefault();
    console.log("ei");
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
        />
        <input
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
        />
        <div className="addForm__2col">
          <input
            onChange={handleChangeInput}
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
          />
          <input
            onChange={handleChangeInput}
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
          />
        </div>
        <input
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
        />
        <textarea
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
        />
        <input
          onChange={handleChangeInput}
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          <GetAvatar
            text="Subir foto del proyecto"
            updateAvatar={handleChangePictureProyect}
          />
        </label>
        <input
          onChange={handleChangeInput}
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        />
        <label htmlFor="photo" className="button">
          <GetAvatar
            text="Subir foto de la autora"
            id="photo"
            updateAvatar={handleChangePictureAuthor}
          />
        </label>
        <input
          onChange={handleChangeInput}
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button onClick={handleSaveProject} className="button--large">
          Guardar proyecto
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
