import { Link } from "react-router-dom";

export const Footer = () => {
  function scroll() {
    window.scrollTo(0, 0);
  }

  return (
    <div id="footer">
      <footer className="container d-flex flex-wrap align-items-center py-4">
        <div className="col-md-4 text-white ">
          <p id="opening-hours" className="col-md-4 text-white">
            Elmar automatyka
          </p>
        </div>
        <ul className="nav navbar-dark col-md-8 d-flex justify-content-end">
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/articles"
            >
              Artykuły
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/accessories"
            >
              Akcesoria
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/orders"
            >
              Zamówienia
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/projects"
            >
              Projekty
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/users"
            >
              Użytkownicy
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/producers"
            >
              Producenci
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/categories"
            >
              Kategorie artykułów
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={scroll}
              className="nav-link px-2 text-white"
              to="/clients"
            >
              Klienci
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
