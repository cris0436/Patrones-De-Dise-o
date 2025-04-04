import { Link } from "react-router-dom";

const Creacionales = () => {
  const patrones = [
    { nombre: 'Singleton', descripcion: 'Garantiza una única instancia de una clase.', ruta: '/patrones/singleton' },
    { nombre: 'Builder', descripcion: 'Facilita la construcción de objetos complejos paso a paso.', ruta: '/patrones/builder' },
    { nombre: 'Factory Method', descripcion: 'Permite la creación de objetos mediante un método en lugar de un constructor.', ruta: '/patrones/factory-method' },
    { nombre: 'Abstract Factory', descripcion: 'Proporciona una interfaz para crear familias de objetos relacionados.', ruta: '/patrones/abstract-factory' },
    { nombre: 'Prototype', descripcion: 'Permite copiar objetos sin depender de sus clases concretas.', ruta: '/patrones/prototype' }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrones de Diseño Creacionales</h1>
      <p className="lead text-center">
        Los patrones de diseño creacionales proporcionan mecanismos de creación de objetos, aumentando la flexibilidad y reutilización del código.
      </p>

      <div className="row">
        <div className="col-md-12">
          <h2>¿Qué son los patrones creacionales?</h2>
          <p>
            Los <strong>patrones creacionales</strong> se centran en la manera en que se crean los objetos. Estos patrones ayudan a desacoplar la lógica de creación de objetos del resto del código, facilitando la reutilización y el mantenimiento del software.
          </p>
          <p>
            Se utilizan para manejar la complejidad de la creación de objetos en escenarios donde la instanciación directa puede ser costosa o ineficiente. Además, permiten que el código sea más flexible al cambiar la forma en que se crean las instancias.
          </p>
        </div>
      </div>

      <h2 className="mt-4">Lista de patrones creacionales</h2>
      <div className="mt-4 row">
        {patrones.map((patron, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{patron.nombre}</h5>
                <p className="card-text">{patron.descripcion}</p>
                <Link to={patron.ruta} className="btn btn-primary">
                  Ver {patron.nombre}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creacionales;
