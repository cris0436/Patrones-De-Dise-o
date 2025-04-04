import { Link } from "react-router-dom";

const Comportamentales = () => {
  const patrones = [
    { nombre: 'Chain of Responsibility', descripcion: 'Permite el paso de una solicitud a través de una cadena de manejadores.', ruta: '/patrones/chain-of-responsibility' },
    { nombre: 'Command', descripcion: 'Encapsula una solicitud como un objeto, permitiendo parametrización y cola de solicitudes.', ruta: '/patrones/command' },
    { nombre: 'Interpreter', descripcion: 'Define una gramática y un intérprete para resolver expresiones en ese lenguaje.', ruta: '/patrones/interpreter' },
    { nombre: 'Iterator', descripcion: 'Proporciona una forma de acceder a los elementos de una colección sin exponer su estructura interna.', ruta: '/patrones/iterator' },
    { nombre: 'Mediator', descripcion: 'Define un objeto intermediario que facilita la comunicación entre objetos sin acoplarlos directamente.', ruta: '/patrones/mediator' },
    { nombre: 'Memento', descripcion: 'Permite capturar y restaurar el estado de un objeto sin violar su encapsulación.', ruta: '/patrones/memento' },
    { nombre: 'Observer', descripcion: 'Define una relación de suscriptor y publicador entre objetos.', ruta: '/patrones/observer' },
    { nombre: 'State', descripcion: 'Permite que un objeto cambie su comportamiento cuando cambia su estado interno.', ruta: '/patrones/state' },
    { nombre: 'Strategy', descripcion: 'Permite definir una familia de algoritmos y seleccionarlos dinámicamente en tiempo de ejecución.', ruta: '/patrones/strategy' },
    { nombre: 'Template Method', descripcion: 'Define el esqueleto de un algoritmo en una superclase y permite que las subclases implementen partes del mismo.', ruta: '/patrones/template-method' },
    { nombre: 'Visitor', descripcion: 'Permite definir nuevas operaciones sobre objetos sin modificar sus clases.', ruta: '/patrones/visitor' }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrones de Diseño Comportamentales</h1>
      <p className="lead text-center">
        Los patrones de diseño comportamentales se centran en la comunicación entre objetos y la asignación de responsabilidades.
      </p>

      <div className="row">
        <div className="col-md-12">
          <h2>¿Qué son los patrones comportamentales?</h2>
          <p>
            Los <strong>patrones comportamentales</strong> definen la manera en que los objetos interactúan y se comunican entre sí.
            Estos patrones ayudan a desacoplar la lógica de negocio de los objetos y mejorar la reutilización del código.
          </p>
        </div>
      </div>

      <h2 className="mt-4">Lista de patrones comportamentales</h2>
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

export default Comportamentales;
