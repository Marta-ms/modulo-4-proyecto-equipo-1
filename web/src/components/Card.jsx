function Card({ projectData }) {

  const {
    photo,
    name,
    job,
    title,
    slogan,
    description,
    technology,
    demo,
    repository,
  } = projectData;

  
  return (
    <section className="previewtwo">
      {/* <div
        style={{ backgroundImage: `url(${personalInfo.image})` }}
        className="projectImage"
      ></div> */}
      <article className="cardtwo">
        <h2 className="cardtwo__projectTitle">
          <span className="cardtwo__projectTitle--text">Nuestro proyecto</span>
        </h2>

        <div className="cardtwo__author">
          <div
            className="cardtwo__authorPhoto"
            style={{ backgroundImage: `url(${photo || ""})` }}
          ></div>
          <h3 className="cardtwo__name">
            {name || "Paquita Salas"}
          </h3>
          <p className="cardtwo__job">
            {job || "Directora de PS Management"}
          </p>
        </div>

        <div className="cardtwo__project">
          <h3 className="cardtwo__name">
            {title || "Proyecto molón"}
          </h3>
          <p className="cardtwo__slogan">{slogan || "Eslogan"}</p>
          <h3 className="cardtwo__descriptionTitle">Descripción</h3>
          <p className="cardtwo__description">
            {description || "Escribe aquí en qué consiste tu proyecto"}
          </p>

          <div className="cardtwo__technicalInfo">
            <p className="cardtwo__technologies">
              {technology || "Tecnologías usadas"}
            </p>

            <a
              className="icon icon__www"
              href={demo || "#"}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={repository || "#"}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Card;
