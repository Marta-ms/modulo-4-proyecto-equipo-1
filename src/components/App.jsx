import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import imageUser from "../images/perfil-usuaria.jpg";
import imageProject from "../images/Fondo-img.jpg";
import postCardToApi from "../services/postCardToApi";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    slogan: "",
    repository: "",
    demo: "",
    technologies: "",
    description: "",
    nameUser: "",
    nameJob: "",
    photoAuthor: "",
    photoProject: "",
  });
  console.log(formInfo);

  const handleChangeInput = (
    valueInput,
    idInput,
    idImages,
    ImageAuthor,
    ImageProjectValue
  ) => {
    console.log(idInput, valueInput);

    if (idInput === "name") {
      setFormInfo({ ...formInfo, name: valueInput });
    } else if (idInput === "slogan") {
      setFormInfo({ ...formInfo, slogan: valueInput });
    } else if (idInput === "desc") {
      setFormInfo({ ...formInfo, desc: valueInput });
    } else if (idInput === "job") {
      setFormInfo({ ...formInfo, job: valueInput });
    } else if (idInput === "autor") {
      setFormInfo({ ...formInfo, autor: valueInput });
    } else if (idInput === "technologies") {
      setFormInfo({ ...formInfo, technologies: valueInput });
    } else if (idInput === "repo") {
      setFormInfo({ ...formInfo, repo: valueInput });
    } else if (idInput === "demo") {
      setFormInfo({ ...formInfo, demo: valueInput });
    } else if (idImages === "photo") {
      setFormInfo({ ...formInfo, photoAuthor: ImageAuthor });
    }
  };
  const handleChangeImageAuthor = (ImageAuthor, idImages) => {
    console.log(ImageAuthor);
    setFormImageAuthor(ImageAuthor);
  };
  const [formImageAuthor, setFormImageAuthor] = useState({
    backgroundImage: `url($(imageUser))`,
  });

  const [formImageProject, setFormImageProject] = useState({
    backgroundImage: `url($(imageProject))`,
  });
  const handleChangeProjectImage = (ImageProjectValue, idImages) => {
    setFormImageProject(ImageProjectValue);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Main
          onChangeInput={handleChangeInput}
          formInfo={formInfo}
          formImages={handleChangeImageAuthor}
          changeAuthorPhoto={formImageAuthor}
          formImageProyect={handleChangeProjectImage}
          changeProjectPhoto={formImageProject}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
