import React from 'react';
import facadeImage from '../../assets/facade.png';
import facadeImageLogo from '../../assets/facade-logo.png';

const Facade = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Facade</h1>
      <p className="lead text-center">
        Un patrón de diseño estructural que proporciona una interfaz simplificada para un sistema complejo de clases, 
        ocultando su complejidad y facilitando su uso.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Facade?</h2>
          <p>
            El <strong>patrón Facade</strong> es un patrón de diseño estructural que proporciona una interfaz unificada 
            y de alto nivel para un conjunto de interfaces en un subsistema. 
            Este patrón simplifica la interacción con sistemas complejos al ocultar detalles internos 
            y proporcionar una API fácil de usar.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En aplicaciones grandes, es común que los sistemas sean complejos y estén formados por múltiples clases con interacciones 
            intrincadas. Gestionar estos sistemas directamente puede hacer que el código cliente sea difícil de entender y mantener.  
          </p>
          <p>
            **Facade** resuelve este problema al actuar como una capa intermedia entre el cliente y los componentes internos del sistema. 
            Permite a los clientes interactuar con el sistema a través de una interfaz más sencilla sin necesidad de conocer su funcionamiento interno.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Simplificación del acceso a bibliotecas complejas.</li>
            <li>Creación de API públicas que oculten la complejidad de los módulos internos.</li>
            <li>Facilitación de la integración de sistemas con múltiples dependencias.</li>
            <li>Reducción de acoplamiento en sistemas grandes.</li>
            <li>Mejora de la mantenibilidad del código al centralizar el acceso a subsistemas.</li>
            <li>Implementación de sistemas en capas (como MVC) para separar responsabilidades.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={facadeImage} alt="Patrón Facade" className="img-fluid" />
          <img src={facadeImageLogo} alt="Logo Facade" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Facade</h2>
          <ul>
            <li>Reduce la complejidad del código cliente al proporcionar una API simplificada.</li>
            <li>Disminuye el acoplamiento entre el cliente y las clases del subsistema.</li>
            <li>Mejora la mantenibilidad y escalabilidad del código.</li>
            <li>Oculta detalles internos del sistema, promoviendo el principio de encapsulación.</li>
            <li>Facilita la integración con otros sistemas o bibliotecas.</li>
            <li>Puede servir como punto centralizado para la seguridad y validaciones.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Facade</h2>
          <ul>
            <li>Puede convertirse en un punto único de falla si la fachada no está bien diseñada.</li>
            <li>Puede ocultar demasiado los detalles del sistema, reduciendo la flexibilidad.</li>
            <li>No elimina la complejidad interna, solo la encapsula.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Adapter: Ambos patrones proporcionan una interfaz diferente, pero mientras Facade simplifica el acceso a un sistema, Adapter adapta una interfaz existente.</li>
            <li>Decorator: A diferencia del Facade, que oculta la complejidad, el patrón Decorator permite añadir funcionalidades sin modificar el código base.</li>
            <li>Singleton: Puede usarse junto a Facade para asegurar que solo haya una única instancia de la fachada en la aplicación.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Subsistema complejo
class SubsistemaA {
    void operacionA() {
        System.out.println("Operación A ejecutada");
    }
}

class SubsistemaB {
    void operacionB() {
        System.out.println("Operación B ejecutada");
    }
}

class SubsistemaC {
    void operacionC() {
        System.out.println("Operación C ejecutada");
    }
}

// Clase Facade que simplifica el uso del subsistema
class Facade {
    private SubsistemaA a;
    private SubsistemaB b;
    private SubsistemaC c;

    public Facade() {
        this.a = new SubsistemaA();
        this.b = new SubsistemaB();
        this.c = new SubsistemaC();
    }

    public void operacionSimple() {
        System.out.println("Ejecutando operación simple a través de Facade...");
        a.operacionA();
        b.operacionB();
        c.operacionC();
    }
}

// Cliente que usa el Facade
public class Cliente {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.operacionSimple();  // Cliente interactúa con la fachada en lugar del sistema completo
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Facade;
