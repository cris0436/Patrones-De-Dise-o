import React from 'react';
import singletonImage from '../../assets/singleton.png';
import singletonImageLogo from '../../assets/singleton-logo.png';
const Singleton = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Singleton</h1>
      <p className="lead text-center">
        Un patrón de diseño creacional que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Singleton?</h2>
          <p>
            El <strong>patrón Singleton</strong> es un patrón de diseño creacional que se utiliza para restringir la creación de múltiples instancias de una clase.
            Su objetivo es garantizar que solo exista una única instancia y proporcionar un punto de acceso global a ella.
          </p>
          <p>
            Es útil en situaciones donde tener múltiples instancias podría causar inconsistencias o un alto consumo de recursos. 
            Se implementa asegurando que la clase tenga un constructor privado y un método estático que controle la creación de la instancia.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En algunos escenarios, necesitamos asegurarnos de que ciertos objetos sean únicos en todo el sistema.  
            Por ejemplo, en una aplicación con múltiples módulos, tener varias conexiones a una base de datos puede generar problemas de rendimiento y consistencia.  
            En este caso, el **patrón Singleton** permite centralizar la gestión de la conexión para evitar estos problemas.
          </p>
          <h3> Casos de uso</h3>
          <ul>
            <li>Gestión de conexiones a bases de datos.</li>
            <li>Implementación de registros de logs en aplicaciones.</li>
            <li>Control de acceso a archivos de configuración global.</li>
            <li>Gestión de caché para mejorar el rendimiento.</li>
            <li>Gestión de colas de impresión en sistemas de impresión.</li>
            <li>Manejo de sesiones en aplicaciones web.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={singletonImage} alt="Patrón Singleton" className="img-fluid" />
          <img src={singletonImageLogo }alt="Patrón Singleton" className="img-fluid"  />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Singleton</h2>
          <ul>
            <li>Garantiza que una clase tenga solo una instancia en toda la aplicación.</li>
            <li>Proporciona un punto de acceso global a la instancia.</li>
            <li>Evita la duplicación innecesaria de objetos, ahorrando recursos.</li>
            <li>Facilita la administración y control de estados globales.</li>
            <li>Es útil para compartir recursos en una aplicación sin crear múltiples instancias.</li>
            <li>Mejora la sincronización en entornos multihilo cuando se implementa correctamente.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Singleton</h2>
          <ul>
            <li>Poca flexibilidad al impedir la creación de múltiples instancias.</li>
            <li>Puede aumentar el acoplamiento del código al hacer dependencias globales.</li>
            <li>Puede generar problemas en pruebas unitarias debido a su estado compartido.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Factory Method: Puede usarse junto con Singleton para controlar la creación de objetos específicos.</li>
            <li>Facade: En muchos casos, el patrón Facade se implementa como un Singleton para centralizar el acceso a un subsistema.</li>
            <li>Prototype: Contrasta con Singleton, ya que Prototype permite múltiples copias de una instancia, mientras que Singleton lo limita a una sola.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`public class Singleton {
    // Instancia única de la clase
    private static Singleton instancia;

    // Constructor privado para evitar la creación de múltiples instancias
    private Singleton() {}

    // Método para obtener la única instancia
    public static Singleton getInstance() {
        if (instancia == null) {
            instancia = new Singleton();
        }
        return instancia;
    }

    // Método de ejemplo dentro del Singleton
    public void mostrarMensaje() {
        System.out.println("¡Singleton en acción!");
    }

    public static void main(String[] args) {
        // Obtener la única instancia del Singleton
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        // Comprobar que ambas referencias apuntan a la misma instancia
        System.out.println(obj1 == obj2); // true

        // Llamar un método desde el Singleton
        obj1.mostrarMensaje();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Singleton;
