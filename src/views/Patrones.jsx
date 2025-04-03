import React from 'react';
import { Link } from 'react-router-dom';

const Patterns = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Patrones de Diseño</h1>
      <p className="lead text-center">
        Explora los diferentes tipos de patrones de diseño en el desarrollo de software.
      </p>

      <div className="row">
        {/* Patrones Creacionales */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Patrones Creacionales</h3>
              <p className="card-text">
                Se enfocan en la creación de objetos, mejorando la flexibilidad y reutilización del código.
              </p>
              <Link to="/patrones/creacionales" className="btn btn-primary">
                Ver Patrones Creacionales
              </Link>
            </div>
          </div>
        </div>
{/* Patrones Comportamentales */}
<div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Patrones Comportamentales</h3>
              <p className="card-text">
                Se centran en la comunicación y la interacción entre los objetos.
              </p>
              <Link to="/patrones/comportamentales" className="btn btn-primary">
                Ver Patrones Comportamentales
              </Link>
            </div>
          </div>
        </div>
        {/* Patrones Estructurales */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">Patrones Estructurales</h3>
              <p className="card-text">
                Definen cómo se organizan las clases y objetos para formar estructuras más grandes.
              </p>
              <Link to="/patrones/estructurales" className="btn btn-primary">
                Ver Patrones Estructurales
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Patterns;
