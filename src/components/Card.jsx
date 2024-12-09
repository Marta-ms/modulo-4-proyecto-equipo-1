function Card() {
  return (
    <section className="preview">
      <div
        style={{ backgroundImage: `url(${personalInfo.image})` }}
        className="projectImage"
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Nuestro proyecto</span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{ backgroundImage: `url(${personalInfo.photo})` }}
          ></div>
          <h3 className="card__name">
            {personalInfo.autor || "Paquita Salas"}
          </h3>
          <p className="card__job">
            {personalInfo.job || "Directora de PS Management"}
          </p>
        </div>

        <div className="card__project">
          <h3 className="card__name">
            {personalInfo.name || "Proyecto molón"}
          </h3>
          <p className="card__slogan">{personalInfo.slogan || "Eslogan"}</p>
          <h3 className="card__descriptionTitle">Descripción</h3>
          <p className="card__description">
            {personalInfo.desc || "Escribe aquí en qué consiste tu proyecto"}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {personalInfo.technologies || "Tecnologías usadas"}
            </p>

            <a
              className="icon icon__www"
              href={personalInfo.demo}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={personalInfo.repo}
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
