import React from 'react';
import bridgeImage from '../../assets/bridge.png';
import bridgeImageLogo from '../../assets/bridge-logo.png';

const Bridge = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Bridge</h1>
      <p className="lead text-center">
        Un patrón estructural que separa la abstracción de su implementación para facilitar su evolución independiente.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Bridge?</h2>
          <p>
            El <strong>patrón Bridge</strong> permite desacoplar una abstracción de su implementación, 
            facilitando que ambas puedan evolucionar de manera independiente.  
            Se basa en dividir una jerarquía de clases en dos partes: 
            <em>abstracción</em> e <em>implementación</em>, utilizando una relación de composición en lugar de herencia.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos casos, una jerarquía de clases puede volverse rígida y difícil de mantener si la abstracción y la implementación están fuertemente acopladas.  
            Con **Bridge**, se evita una explosión de clases debido a combinaciones de características, permitiendo cambios independientes en la abstracción y la implementación.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Soporte para múltiples plataformas en una aplicación (Ej: sistemas operativos, bases de datos).</li>
            <li>Separación entre la lógica de negocio y la interfaz de usuario.</li>
            <li>Implementación de dispositivos con diferentes marcas (Ej: controles remotos y televisores).</li>
            <li>Facilitación de extensibilidad en sistemas grandes y complejos.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={bridgeImage} alt="Patrón Bridge" className="img-fluid" />
          <img src={bridgeImageLogo} alt="Logo Bridge" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Bridge</h2>
          <ul>
            <li>Permite extender abstracciones e implementaciones de forma independiente.</li>
            <li>Reduce la cantidad de subclases necesarias para representar múltiples combinaciones.</li>
            <li>Favorece el principio de **abierto/cerrado** (OCP) de SOLID.</li>
            <li>Disminuye el acoplamiento entre la lógica de alto nivel y los detalles de implementación.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Bridge</h2>
          <ul>
            <li>Añade complejidad adicional al código debido a la necesidad de manejar más clases.</li>
            <li>Puede ser innecesario si la jerarquía de clases no es muy profunda o compleja.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Adapter: Ambos separan interfaces, pero Bridge lo hace para desacoplar la abstracción de su implementación.</li>
            <li>Decorator: Se usa para añadir funcionalidades, mientras que Bridge separa las implementaciones.</li>
            <li>Composite: Puede combinarse con Bridge para manejar estructuras jerárquicas.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz de implementación
interface Dispositivo {
    void encender();
    void apagar();
}

// Implementaciones concretas
class TV implements Dispositivo {
    public void encender() {
        System.out.println("Encendiendo TV");
    }

    public void apagar() {
        System.out.println("Apagando TV");
    }
}

class Radio implements Dispositivo {
    public void encender() {
        System.out.println("Encendiendo Radio");
    }

    public void apagar() {
        System.out.println("Apagando Radio");
    }
}

// Abstracción
abstract class ControlRemoto {
    protected Dispositivo dispositivo;

    public ControlRemoto(Dispositivo dispositivo) {
        this.dispositivo = dispositivo;
    }

    public abstract void presionarBotonEncender();
    public abstract void presionarBotonApagar();
}

// Implementación de la abstracción
class ControlBasico extends ControlRemoto {
    public ControlBasico(Dispositivo dispositivo) {
        super(dispositivo);
    }

    public void presionarBotonEncender() {
        dispositivo.encender();
    }

    public void presionarBotonApagar() {
        dispositivo.apagar();
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Dispositivo tv = new TV();
        ControlRemoto control = new ControlBasico(tv);
        
        control.presionarBotonEncender();
        control.presionarBotonApagar();

        Dispositivo radio = new Radio();
        control = new ControlBasico(radio);

        control.presionarBotonEncender();
        control.presionarBotonApagar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Bridge;
