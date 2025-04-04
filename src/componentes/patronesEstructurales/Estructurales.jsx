import { BrowserRouter, Link } from 'react-router-dom';

const Estructurales = () => {
  const patrones = [
    { nombre: 'Adapter', descripcion: 'Convierte la interfaz de una clase en otra interfaz esperada por los clientes.', ruta: '/patrones/adapter' },
    { nombre: 'Bridge', descripcion: 'Separa la abstracción de su implementación para que ambas puedan evolucionar independientemente.', ruta: '/patrones/bridge' },
    { nombre: 'Composite', descripcion: 'Permite tratar una estructura de objetos como una jerarquía uniforme.', ruta: '/patrones/composite' },
    { nombre: 'Decorator', descripcion: 'Añade funcionalidades dinámicamente a objetos sin modificar su estructura original.', ruta: '/patrones/decorator' },
    { nombre: 'Facade', descripcion: 'Proporciona una interfaz unificada para simplificar el uso de un sistema complejo.', ruta: '/patrones/facade' },
    { nombre: 'Flyweight', descripcion: 'Optimiza el uso de memoria compartiendo datos comunes entre objetos similares.', ruta: '/patrones/flyweight' },
    { nombre: 'Proxy', descripcion: 'Controla el acceso a otro objeto, permitiendo funcionalidades adicionales como caching y control de acceso.', ruta: '/patrones/proxy' }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrones de Diseño Estructurales</h1>
      <p className="lead text-center">
        Los patrones estructurales explican cómo ensamblar clases y objetos para formar estructuras más grandes, manteniendo la flexibilidad y eficiencia.
      </p>

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

export default Estructurales;
