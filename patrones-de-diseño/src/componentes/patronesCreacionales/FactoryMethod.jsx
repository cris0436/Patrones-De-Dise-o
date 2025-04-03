import React from 'react';
import factoryImage from '../../assets/factoryMethod.png';
import factoryImageLogo from '../../assets/factory-method-logo.png';

const FactoryMethod = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Factory Method</h1>
      <p className="lead text-center">
        Un patrón de diseño creacional que define una interfaz para la creación de objetos,  
        pero permite a las subclases alterar el tipo de objeto que se crea.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Factory Method?</h2>
          <p>
            El <strong>patrón Factory Method</strong> es un patrón de diseño creacional que proporciona una forma eficiente  
            de instanciar objetos sin acoplar la lógica de creación a clases específicas.  
          </p>
          <h3>🎯 ¿Qué problema resuelve?</h3>
          <p>
            En muchos casos, la creación directa de objetos puede generar un fuerte acoplamiento entre clases.  
            **Factory Method** permite delegar la creación de instancias a subclases, facilitando la extensibilidad  
            y el mantenimiento del código.
          </p>
          <h3>📌 Casos de uso</h3>
          <ul>
            <li>Creación de objetos en frameworks sin conocer las clases exactas.</li>
            <li>Gestión de múltiples variantes de un mismo tipo de objeto.</li>
            <li>Generación dinámica de controladores en aplicaciones web.</li>
            <li>Implementación de conectores para distintas bases de datos.</li>
            <li>Desarrollo de bibliotecas donde se quiere ocultar la lógica de creación de objetos.</li>
            <li>Uso en sistemas de plugins donde los objetos deben ser creados dinámicamente.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={factoryImage} alt="Patrón Factory Method" className="img-fluid" />
          <img src={factoryImageLogo} alt="Logo Factory Method" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Factory Method</h2>
          <ul>
            <li>Desacopla la creación de objetos del código principal.</li>
            <li>Permite extender fácilmente la funcionalidad sin modificar el código existente.</li>
            <li>Facilita el uso de principios SOLID, en especial el principio de abierto/cerrado.</li>
            <li>Mejora la mantenibilidad al centralizar la lógica de creación de objetos.</li>
            <li>Es útil para la inyección de dependencias y pruebas unitarias.</li>
            <li>Permite la creación de objetos dinámicamente en tiempo de ejecución.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Factory Method</h2>
          <ul>
            <li>Añade complejidad al código al requerir más clases e interfaces.</li>
            <li>Puede ser excesivo para la creación de objetos simples.</li>
            <li>El uso incorrecto puede llevar a sobrecargar el diseño del sistema.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Abstract Factory: Ambos son patrones creacionales. Abstract Factory utiliza varios Factory Methods para crear una familia completa de objetos relacionados.</li>
            <li>Template Method: A menudo se combina con Factory Method cuando se necesita que la estructura general esté definida en una clase base, pero que ciertos pasos (como la creación de objetos) se deleguen a subclases.</li>
            <li>Prototype: Mientras Factory Method crea nuevos objetos mediante subclases, Prototype los crea copiando una instancia existente.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Pseudocodigo</h2>
        <pre className="bg-light p-3">
{`// La clase creadora declara el método fábrica que debe devolver
// un objeto de una clase de producto. Normalmente, las
// subclases de la creadora proporcionan la implementación de
// este método.
class Dialog is
    // La creadora también puede proporcionar cierta
    // implementación por defecto del método fábrica.
    abstract method createButton():Button

    // Observa que, a pesar de su nombre, la principal
    // responsabilidad de la creadora no es crear productos.
    // Normalmente contiene cierta lógica de negocio que depende
    // de los objetos de producto devueltos por el método
    // fábrica. Las subclases pueden cambiar indirectamente esa
    // lógica de negocio sobrescribiendo el método fábrica y
    // devolviendo desde él un tipo diferente de producto.
    method render() is
        // Invoca el método fábrica para crear un objeto de
        // producto.
        Button okButton = createButton()
        // Ahora utiliza el producto.
        okButton.onClick(closeDialog)
        okButton.render()


// Los creadores concretos sobrescriben el método fábrica para
// cambiar el tipo de producto resultante.
class WindowsDialog extends Dialog is
    method createButton():Button is
        return new WindowsButton()

class WebDialog extends Dialog is
    method createButton():Button is
        return new HTMLButton()


// La interfaz de producto declara las operaciones que todos los
// productos concretos deben implementar.
interface Button is
    method render()
    method onClick(f)

// Los productos concretos proporcionan varias implementaciones
// de la interfaz de producto.

class WindowsButton implements Button is
    method render(a, b) is
        // Representa un botón en estilo Windows.
    method onClick(f) is
        // Vincula un evento clic de OS nativo.

class HTMLButton implements Button is
    method render(a, b) is
        // Devuelve una representación HTML de un botón.
    method onClick(f) is
        // Vincula un evento clic de navegador web.

class Application is
    field dialog: Dialog

    // La aplicación elige un tipo de creador dependiendo de la
    // configuración actual o los ajustes del entorno.
    method initialize() is
        config = readApplicationConfigFile()

        if (config.OS == "Windows") then
            dialog = new WindowsDialog()
        else if (config.OS == "Web") then
            dialog = new WebDialog()
        else
            throw new Exception("Error! Unknown operating system.")

    // El código cliente funciona con una instancia de un
    // creador concreto, aunque a través de su interfaz base.
    // Siempre y cuando el cliente siga funcionando con el
    // creador a través de la interfaz base, puedes pasarle
    // cualquier subclase del creador.
    method main() is
        this.initialize()
        dialog.render()`}
        </pre>
      </div>
    </div>
  );
};

export default FactoryMethod;
