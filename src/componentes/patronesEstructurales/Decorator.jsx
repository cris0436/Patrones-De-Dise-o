import React from 'react';
import decoratorImage from '../../assets/decorator.png';
import decoratorImageLogo from '../../assets/decorator-logo.png';

const Decorator = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Decorator</h1>
      <p className="lead text-center">
        Un patrón de diseño estructural que permite agregar funcionalidades a objetos de manera dinámica sin modificar su código original.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Decorator?</h2>
          <p>
            El <strong>patrón Decorator</strong> es un patrón estructural que permite extender la funcionalidad de objetos de manera flexible sin alterar su estructura.  
            Se basa en envolver un objeto con clases adicionales llamadas decoradores que pueden modificar su comportamiento en tiempo de ejecución.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos casos, agregar funcionalidades nuevas a una clase mediante herencia puede hacer que el código se vuelva inflexible y difícil de mantener.  
            Con **Decorator**, en lugar de modificar la clase base, se crean capas adicionales que "decoran" el objeto original con nuevas capacidades.  
          </p>
          <p>
            Esto evita la necesidad de crear múltiples subclases para cada combinación de características, promoviendo el principio de composición sobre la herencia.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Extender funcionalidades de objetos sin alterar su código fuente.</li>
            <li>Aplicación de filtros en flujos de datos (compresión, encriptación).</li>
            <li>Implementación de interfaces gráficas con múltiples estilos dinámicos.</li>
            <li>Control de permisos en sistemas sin modificar clases existentes.</li>
            <li>Manipulación de streams en Java mediante clases como `BufferedReader`.</li>
            <li>Creación de middleware en frameworks como Express.js.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={decoratorImage} alt="Patrón Decorator" className="img-fluid" />
          <img src={decoratorImageLogo} alt="Logo Decorator" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Decorator</h2>
          <ul>
            <li>Permite agregar funcionalidades a los objetos de manera dinámica.</li>
            <li>Favorece el principio de **abierto/cerrado** (OCP) de SOLID.</li>
            <li>Reduce la necesidad de múltiples subclases para combinar comportamientos.</li>
            <li>Fomenta la reutilización y modularidad del código.</li>
            <li>Facilita la adición de múltiples decoradores en tiempo de ejecución.</li>
            <li>Es compatible con otros patrones como Factory Method y Proxy.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Decorator</h2>
          <ul>
            <li>Puede aumentar la complejidad del código debido a múltiples capas de decoradores.</li>
            <li>El orden de los decoradores puede afectar el comportamiento del objeto.</li>
            <li>El uso excesivo de decoradores puede dificultar la depuración y el mantenimiento.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Proxy: Ambos patrones envuelven un objeto, pero Proxy controla el acceso mientras que Decorator añade funcionalidad.</li>
            <li>Adapter: Mientras que Decorator extiende un objeto sin modificarlo, Adapter cambia su interfaz para hacerlo compatible con otro sistema.</li>
            <li>Composite: Puede usarse junto con Decorator para estructurar jerárquicamente objetos decorados.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz común
interface Notificador {
    void enviarMensaje(String mensaje);
}

// Implementación base
class NotificadorEmail implements Notificador {
    public void enviarMensaje(String mensaje) {
        System.out.println("Enviando email: " + mensaje);
    }
}

// Decorador base
abstract class NotificadorDecorator implements Notificador {
    protected Notificador notificador;

    public NotificadorDecorator(Notificador notificador) {
        this.notificador = notificador;
    }

    public void enviarMensaje(String mensaje) {
        notificador.enviarMensaje(mensaje);
    }
}

// Decorador concreto para SMS
class NotificadorSMS extends NotificadorDecorator {
    public NotificadorSMS(Notificador notificador) {
        super(notificador);
    }

    public void enviarMensaje(String mensaje) {
        super.enviarMensaje(mensaje);
        System.out.println("Enviando SMS: " + mensaje);
    }
}

// Decorador concreto para WhatsApp
class NotificadorWhatsApp extends NotificadorDecorator {
    public NotificadorWhatsApp(Notificador notificador) {
        super(notificador);
    }

    public void enviarMensaje(String mensaje) {
        super.enviarMensaje(mensaje);
        System.out.println("Enviando WhatsApp: " + mensaje);
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Notificador notificador = new NotificadorEmail();
        
        // Añadiendo decoradores dinámicamente
        notificador = new NotificadorSMS(notificador);
        notificador = new NotificadorWhatsApp(notificador);

        notificador.enviarMensaje("¡Hola! Esto es un mensaje.");
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Decorator;
