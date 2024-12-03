import "../scss/layout/Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="container-landing">
        <header className="header-landing">
          <h2>
            La vida es una audición constante y estamos aqui para triunfar
          </h2>
        </header>
        <main>
          <h3 className="message-landing">¿Quieres presentar tu proyecto?</h3>
          <div>
            <Link className="button-landing" to="/home">
              Empieza ahora!
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
