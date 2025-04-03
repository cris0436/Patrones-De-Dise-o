import React from 'react';
import abstractFactoryImage from '../../assets/abstractFactory.png';
import abstractFactoryImageLogo from '../../assets/abstract-factory-logo.png';

const AbstractFactory = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Abstract Factory</h1>
      <p className="lead text-center">
        Un patrón de diseño creacional que proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Abstract Factory?</h2>
          <p>
            El <strong>patrón Abstract Factory</strong> es un patrón de diseño creacional que permite la creación de familias de objetos relacionados  
            sin especificar sus clases concretas.  
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos sistemas, los objetos se agrupan en familias y deben trabajar juntos.  
            Si el código de una aplicación depende directamente de clases concretas, cada cambio  
            en la estructura de los objetos puede ser costoso.  
          </p>
          <p>
            **Abstract Factory** ayuda a desacoplar la creación de objetos de su implementación concreta,  
            asegurando que todas las instancias de objetos sean compatibles entre sí dentro de una familia.  
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Creación de interfaces gráficas con diferentes temas (Dark Mode, Light Mode).</li>
            <li>Desarrollo de conectores para múltiples bases de datos sin cambiar el código del cliente.</li>
            <li>Generación de componentes UI compatibles en diferentes sistemas operativos.</li>
            <li>Implementación de motores de videojuegos con múltiples estilos gráficos.</li>
            <li>Creación de APIs que deben soportar múltiples versiones o variantes.</li>
            <li>Diseño de sistemas de plugins que deben cargar diferentes módulos de manera flexible.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={abstractFactoryImage} alt="Patrón Abstract Factory" className="img-fluid" />
          <img src={abstractFactoryImageLogo} alt="Logo Abstract Factory" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Abstract Factory</h2>
          <ul>
            <li>Facilita la creación de familias de objetos compatibles entre sí.</li>
            <li>Promueve el principio de responsabilidad única y de abierto/cerrado.</li>
            <li>Permite cambiar las implementaciones sin afectar al código cliente.</li>
            <li>Mejora la organización del código al desacoplar instanciaciones concretas.</li>
            <li>Es útil para la configuración de sistemas que requieren diferentes variantes de objetos.</li>
            <li>Facilita la implementación de pruebas unitarias al usar mocks o fábricas personalizadas.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Abstract Factory</h2>
          <ul>
            <li>Puede añadir complejidad innecesaria si solo se necesita crear un solo tipo de objeto.</li>
            <li>Requiere la creación de múltiples clases e interfaces, aumentando la sobrecarga.</li>
            <li>No es ideal cuando solo se necesita una fábrica simple para crear objetos.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Factory Method: El patrón Abstract Factory suele utilizar el patrón Factory Method internamente para crear cada producto individual de la familia.</li>
            <li>Builder: Ambos patrones separan la creación del objeto de su uso, pero mientras Builder se enfoca en construir un solo objeto complejo paso a paso, Abstract Factory se enfoca en crear múltiples objetos relacionados de forma coherente.</li>
            <li>Prototype: Puede utilizarse junto a Abstract Factory para crear objetos nuevos mediante copias, en lugar de instancias nuevas desde cero.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaces para productos abstractos
interface Boton {
    void render();
}

interface Checkbox {
    void marcar();
}

// Implementaciones concretas para Windows
class BotonWindows implements Boton {
    public void render() {
        System.out.println("Botón estilo Windows");
    }
}

class CheckboxWindows implements Checkbox {
    public void marcar() {
        System.out.println("Checkbox estilo Windows marcado");
    }
}

// Implementaciones concretas para MacOS
class BotonMac implements Boton {
    public void render() {
        System.out.println("Botón estilo MacOS");
    }
}

class CheckboxMac implements Checkbox {
    public void marcar() {
        System.out.println("Checkbox estilo MacOS marcado");
    }
}

// Interfaz de la fábrica abstracta
interface GUIFactory {
    Boton crearBoton();
    Checkbox crearCheckbox();
}

// Fábrica concreta para Windows
class WindowsFactory implements GUIFactory {
    public Boton crearBoton() {
        return new BotonWindows();
    }

    public Checkbox crearCheckbox() {
        return new CheckboxWindows();
    }
}

// Fábrica concreta para MacOS
class MacFactory implements GUIFactory {
    public Boton crearBoton() {
        return new BotonMac();
    }

    public Checkbox crearCheckbox() {
        return new CheckboxMac();
    }
}

// Cliente que usa la fábrica abstracta
public class Aplicacion {
    private Boton boton;
    private Checkbox checkbox;

    public Aplicacion(GUIFactory factory) {
        boton = factory.crearBoton();
        checkbox = factory.crearCheckbox();
    }

    public void renderizar() {
        boton.render();
        checkbox.marcar();
    }

    public static void main(String[] args) {
        GUIFactory factory;
        
        // Simulación de plataforma detectada
        String sistema = "Windows";

        if (sistema.equals("Windows")) {
            factory = new WindowsFactory();
        } else {
            factory = new MacFactory();
        }

        Aplicacion app = new Aplicacion(factory);
        app.renderizar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default AbstractFactory;
