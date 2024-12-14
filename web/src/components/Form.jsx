import GetAvatar from "./GetAvatar";

function Form({ onChangeInput, formInfo, handleSaveProject, dataApi }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value, event.target.id);
  };

  const formImages = (event) => {
    onChangeInput(event, "photo");
  };

  const formImageProyect = (event) => {
    onChangeInput(event, "image");
  };

  return (
    <form className="addForm" onSubmit={handleSaveProject}>
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
            id="image"
            updateAvatar={formImageProyect}
          />
        </label>
        <input
          onChange={formImageProyect}
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        />
        <label htmlFor="photo" className="button">
          <GetAvatar
            text="Subir foto de la autora"
            id="photo"
            updateAvatar={formImages}
          />
        </label>
        <input
          onChange={formImages}
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button type="submit" className="button--large">
          Guardar proyecto
        </button>

        <a href={dataApi} target="_blank" rel="noopener noreferrer">
          {dataApi ? <p>¡Proyecto guardado! Haz clic aquí para verlo</p> : null}
        </a>
      </fieldset>
    </form>
  );
}

export default Form;