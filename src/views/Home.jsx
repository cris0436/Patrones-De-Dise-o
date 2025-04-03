import React from 'react';
import { Link } from 'react-router-dom';
// Asegúrate de tener la imagen en esta ruta

const Home = () => {
  return (
    <div className="container mt-5 text-center mb-5">
      <h1 className="text-center">Patrones de Diseño en Software</h1>
      <p className="lead">
        Los patrones de diseño son soluciones probadas para problemas recurrentes en el desarrollo de software.
        Ayudan a estructurar el código de manera eficiente y reutilizable.
      </p>
      <img src="https://refactoring.guru/images/patterns/content/index/patterns-i3.png?id=8acb54bc13ec54391a2a450330f9106a" 
      alt="" />
      <p>
        Aprende sobre los diferentes tipos de patrones de diseño y cómo aplicarlos en tus proyectos.
      </p>

      <Link to="/patrones" className="btn btn-primary mt-3">
        Explorar Patrones de Diseño
      </Link>
    </div>
  );
};

export default Home;
