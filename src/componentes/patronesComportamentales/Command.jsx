import React from 'react';
import commandImage from '../../assets/command.png';
import commandImageLogo from '../../assets/command-logo.png';

const Command = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Command</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que convierte solicitudes o acciones en objetos independientes, permitiendo su almacenamiento, ejecución o anulación.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Command?</h2>
          <p>
            El <strong>patrón Command</strong> encapsula una acción en un objeto, permitiendo que la solicitud sea parametrizable, encolable o reversible.  
            Esto separa el emisor de la acción del receptor, facilitando la extensibilidad y flexibilidad del código.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            Cuando hay múltiples operaciones en una aplicación y se necesita estructurar las solicitudes de manera flexible,  
            Command desacopla los objetos que invocan comandos de aquellos que los ejecutan, facilitando la gestión de acciones como deshacer/rehacer.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Implementación de menús, botones y atajos de teclado en interfaces gráficas.</li>
            <li>Soporte para operaciones de deshacer/rehacer en aplicaciones.</li>
            <li>Colas de solicitudes en sistemas distribuidos.</li>
            <li>Automatización de tareas mediante macros.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={commandImage} alt="Patrón Command" className="img-fluid" />
          <img src={commandImageLogo} alt="Logo Command" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Command</h2>
          <ul>
            <li>Facilita la implementación de operaciones de deshacer/rehacer.</li>
            <li>Permite encapsular solicitudes y ejecutarlas de manera diferida.</li>
            <li>Promueve el principio de inversión de dependencia (DIP) al desacoplar el emisor del receptor.</li>
            <li>Permite construir colas de comandos para ejecución secuencial o paralela.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Command</h2>
          <ul>
            <li>Puedes aumentar la complejidad del código al agregar múltiples clases de comandos.</li>
            <li>El uso excesivo de comandos puede hacer que el código sea más difícil de seguir.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Mediator:</strong> Mientras que Command encapsula una acción específica, Mediator coordina múltiples objetos para manejar interacciones complejas.
            </li>
            <li>
              <strong>Strategy:</strong> Ambos patrones encapsulan comportamiento, pero Strategy se enfoca en seleccionar algoritmos dinámicamente, mientras que Command maneja solicitudes concretas.
            </li>
            <li>
              <strong>Observer:</strong> Puede combinarse con Command para ejecutar comandos automáticamente cuando ocurre un evento.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz Command
interface Comando {
    void ejecutar();
}

// Implementaciones concretas
class LuzEncender implements Comando {
    private Luz luz;

    public LuzEncender(Luz luz) {
        this.luz = luz;
    }

    public void ejecutar() {
        luz.encender();
    }
}

class LuzApagar implements Comando {
    private Luz luz;

    public LuzApagar(Luz luz) {
        this.luz = luz;
    }

    public void ejecutar() {
        luz.apagar();
    }
}

// Receptor
class Luz {
    public void encender() {
        System.out.println("La luz está encendida.");
    }

    public void apagar() {
        System.out.println("La luz está apagada.");
    }
}

// Invocador
class ControlRemoto {
    private Comando comando;

    public void setComando(Comando comando) {
        this.comando = comando;
    }

    public void presionarBoton() {
        comando.ejecutar();
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Luz luz = new Luz();
        Comando encender = new LuzEncender(luz);
        Comando apagar = new LuzApagar(luz);

        ControlRemoto control = new ControlRemoto();
        control.setComando(encender);
        control.presionarBoton();

        control.setComando(apagar);
        control.presionarBoton();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Command;
