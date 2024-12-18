import { useEffect, useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ProyectList from "./ProyectList";
import postCardToApi from "../services/postCardToApi";

function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const [urlProject, setUrlProject] = useState("");

  useEffect(() => {
    localStorage.setItem("formInfo", JSON.stringify(formInfo));
  }, [formInfo]);

  const handleChangeInput = (valueInput, idInput) => {
    setFormInfo((prevState) => ({
      ...prevState,
      [idInput]: valueInput,
    }));
  };

  const handleSaveProject = (ev) => {
    ev.preventDefault();

    if (!formInfo.name || !formInfo.autor) {
      alert("El nombre del proyecto y el autor son obligatorios");
      return;
    }
    postCardToApi(formInfo).then((data) => {
      console.log(data.cardUrl);
      setUrlProject(data.cardUrl);
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <div className="container">
              <Header />
              <Main
                onChangeInput={handleChangeInput}
                formInfo={formInfo}
                handleSaveProject={handleSaveProject}
                urlProject={urlProject}
              />
              <Footer />
            </div>
          }
        />
        <Route path="/proyectList" element={<ProyectList />} />
      </Routes>
    </>
  );
}

export default App;
