import { BrowserRouter, Link } from 'react-router-dom';
const Estructurales = () => {
    return (
      <div className="container mt-5">
        <h1 className="text-center">Patrones de Diseño Estructurales</h1>
        <p className="lead text-center">
          Los patrones estructurales explican cómo ensamblar clases y objetos para formar estructuras más grandes, manteniendo la flexibilidad y eficiencia.
        </p>
  
        <div className="row">
          <div className="col-md-12">
            <h2>¿Qué son los patrones estructurales?</h2>
            <p>
              Los <strong>patrones estructurales</strong> se enfocan en la composición de clases y objetos,  
              ayudando a definir relaciones entre ellos de una manera que facilite la reutilización y mantención del código.
            </p>
            <p>
              Estos patrones permiten estructurar sistemas complejos sin aumentar significativamente su complejidad,
              promoviendo el uso eficiente de recursos y evitando dependencias rígidas.
            </p>
          </div>
        </div>
  
        <h2 className="mt-4">Lista de patrones estructurales</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/patrones/adapter">🔹 Adapter</Link> - Convierte la interfaz de una clase en otra interfaz esperada por los clientes.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/bridge">🔹 Bridge</Link> - Separa la abstracción de su implementación para que ambas puedan evolucionar independientemente.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/composite">🔹 Composite</Link> - Permite tratar una estructura de objetos como una jerarquía uniforme.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/decorator">🔹 Decorator</Link> - Añade funcionalidades dinámicamente a objetos sin modificar su estructura original.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/facade">🔹 Facade</Link> - Proporciona una interfaz unificada para simplificar el uso de un sistema complejo.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/flyweight">🔹 Flyweight</Link> - Optimiza el uso de memoria compartiendo datos comunes entre objetos similares.
          </li>
          <li className="list-group-item">
            <Link to="/patrones/proxy">🔹 Proxy</Link> - Controla el acceso a otro objeto, permitiendo funcionalidades adicionales como caching y control de acceso.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Estructurales;