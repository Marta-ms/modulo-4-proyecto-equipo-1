function Preview({ personalInfo, changeAuthorPhoto, changeProjectPhoto }) {
  return (
    <section className="preview">
      <div
        style={{ backgroundImage: `url(${changeProjectPhoto})` }}
        className="projectImage"
      ></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">Nombre de proyecto</span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{ backgroundImage: `url(${changeAuthorPhoto})` }}
          ></div>
          <h3 className="card__name">{personalInfo.autor}</h3>
          <p className="card__job">{personalInfo.job}</p>
        </div>

        <div className="card__project">
          <h3 className="card__name">{personalInfo.name}</h3>
          <p className="card__slogan">{personalInfo.slogan}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{personalInfo.desc}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{personalInfo.technologies}</p>

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

export default Preview;
