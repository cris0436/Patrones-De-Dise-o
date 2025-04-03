import { Link } from "react-router-dom";
const Comportamentales = () => {
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
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/patrones/chain-of-responsibility">🔹 Chain of Responsibility</Link> - Permite el paso de una solicitud a través de una cadena de manejadores.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/command">🔹 Command</Link> - Encapsula una solicitud como un objeto, permitiendo parametrización y cola de solicitudes.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/interpreter">🔹 Interpreter</Link> - Define una gramática y un intérprete para resolver expresiones en ese lenguaje.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/iterator">🔹 Iterator</Link> - Proporciona una forma de acceder a los elementos de una colección sin exponer su estructura interna.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/mediator">🔹 Mediator</Link> - Define un objeto intermediario que facilita la comunicación entre objetos sin acoplarlos directamente.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/memento">🔹 Memento</Link> - Permite capturar y restaurar el estado de un objeto sin violar su encapsulación.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/observer">🔹 Observer</Link> - Define una relación de suscriptor y publicador entre objetos.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/state">🔹 State</Link> - Permite que un objeto cambie su comportamiento cuando cambia su estado interno.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/strategy">🔹 Strategy</Link> - Permite definir una familia de algoritmos y seleccionarlos dinámicamente en tiempo de ejecución.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/template-method">🔹 Template Method</Link> - Define el esqueleto de un algoritmo en una superclase y permite que las subclases implementen partes del mismo.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/visitor">🔹 Visitor</Link> - Permite definir nuevas operaciones sobre objetos sin modificar sus clases.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Comportamentales;