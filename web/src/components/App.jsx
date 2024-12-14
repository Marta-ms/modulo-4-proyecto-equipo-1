import { useEffect, useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import imageUser from "../images/perfil-usuaria.jpg";
import imageProject from "../images/Fondo-img.jpg";
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
    image: { imageProject },
    photo: { imageUser },
  });

  const [dataApi, setDataApi] = useState("");

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

    console.log("Enviando datos al API:", formInfo);

    postCardToApi(formInfo)
      .then((result) => {
        console.log("Respuesta del API:", result);
        setDataApi(result); // Guarda el enlace o ID retornado
      })
      .catch((error) => {
        console.error("Error al guardar:", error.message);
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
                dataApi={dataApi}
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