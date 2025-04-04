import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row footer d-flex">
          {/* Sección de enlaces */}
          <div className="col-md-6 d-flex flex-column flex-grow-1">
            <h5>Enlaces rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">🏠 Inicio</Link></li>
              <li><Link to="/patrones" className="text-light text-decoration-none">📂 Patrones de Diseño</Link></li>
              <li>
                <a href="https://refactoring.guru/es" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  📚 Fuente: Refactoring Guru
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de información */}
          <div className="col-md-6 d-flex flex-column flex-grow-1 text-md-end">
            <h5>Información</h5>
            <p className="mb-0">Proyecto sobre Patrones de Diseño</p>
            <p>Autor Cristhian Alejandro Cabezas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

