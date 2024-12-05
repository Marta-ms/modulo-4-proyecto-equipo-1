import "../scss/layout/ProyectList.scss";
import Logo from "../images/adalab.png";
import Laptop from "../images/laptop-code-solid.svg";


function ProyectList() {
  return (
    <>
      <header>
        <img
          className="header__companyLogo"
          src={Laptop}
          alt="Logo proyectos molones"
        />
        <img className="logoSponsor" src={Logo} alt="Logo Adalab" />
      </header>
      <main>
        <h1>Proyectos Molones</h1>
        <h4>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h4>
        <button>NUEVO PROYECTO</button>
        <div>
          <p>Nombre del proyecto:</p>
          <p>Descripción:</p>
          <p>Tecnologías que usa:</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <footer>
        <img className="logoSponsor" src={Logo} alt="Logo Adalab" />
      </footer>
    </>
  );
}

export default ProyectList;
