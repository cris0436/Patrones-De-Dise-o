import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const BarraNavegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container">
            <Link className="navbar-brand" to="/">Patrones de Diseño</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">🏠 Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patrones">📂 Patrones de Diseño</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };

export default BarraNavegacion