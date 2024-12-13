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
  // console.log(formInfo);

  useEffect(() => {
    localStorage.setItem("formInfo", JSON.stringify(formInfo));
  }, [formInfo]);

  const handleChangeInput = (valueInput, idInput) => {
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
    } else if (idInput === "image") {
      setFormInfo({ ...formInfo, image: valueInput });
    } else if (idInput === "photo") {
      setFormInfo({ ...formInfo, photo: valueInput });
    }
  };

  const [dataApi, setDataApi] = useState("");
  const postCardToApi = (formInfo) => {
    return fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(formInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cardURL);
        setDataApi(data.cardURL);
      });
  };

  //fetch frontend para lista de proyectos falsos
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/projects/list")
      .then((res) => res.json())
      .then((data) => {
        setProjectsList(data.result);
      });
  }, []);

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
                postCardToApi={postCardToApi}
                dataApi={dataApi}
              />
              <Footer />
            </div>
          }
        />
        <Route
          path="/proyectList"
          element={<ProyectList projectsList={projectsList} />}
        />
      </Routes>
    </>
  );
}

export default App;
