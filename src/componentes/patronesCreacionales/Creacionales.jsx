import { Link } from "react-router-dom";
const Creacionales = () => {
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
              Los <strong>patrones creacionales</strong> se centran en la manera en que se crean los objetos.  
              Estos patrones ayudan a desacoplar la lógica de creación de objetos del resto del código,  
              facilitando la reutilización y el mantenimiento del software.
            </p>
            <p>
              Se utilizan para manejar la complejidad de la creación de objetos en escenarios donde la  
              instanciación directa puede ser costosa o ineficiente.  
              Además, permiten que el código sea más flexible al cambiar la forma en que se crean las instancias.
            </p>
          </div>
        </div>
  
        <h2 className="mt-4">Lista de patrones creacionales</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/patrones/singleton">🔹 Singleton</Link> - Garantiza una única instancia de una clase.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/builder">🔹 Builder</Link> - Facilita la construcción de objetos complejos paso a paso.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/factory-method">🔹 Factory Method</Link> - Permite la creación de objetos mediante un método en lugar de un constructor.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/abstract-factory">🔹 Abstract Factory</Link> - Proporciona una interfaz para crear familias de objetos relacionados.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/prototype">🔹 Prototype</Link> - Permite copiar objetos sin depender de sus clases concretas.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Creacionales ;
  