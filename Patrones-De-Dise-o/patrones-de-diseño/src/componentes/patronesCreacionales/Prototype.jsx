import React from 'react';
import prototypeImage from '../../assets/prototype.png';
import prototypeImageLogo from '../../assets/prototype-logo.png';

const Prototype = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Prototype</h1>
      <p className="lead text-center">
        Un patrón de diseño creacional que permite copiar objetos existentes sin que el código dependa de sus clases concretas.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Prototype?</h2>
          <p>
            El <strong>patrón Prototype</strong> es un patrón de diseño creacional que se basa en la clonación de objetos.  
            En lugar de instanciar nuevos objetos desde cero, se crean copias de objetos ya existentes,  
            lo que permite mejorar el rendimiento y simplificar la gestión de estructuras complejas.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En algunas aplicaciones, la creación de objetos puede ser costosa en términos de tiempo y recursos,  
            especialmente cuando estos objetos requieren configuraciones complejas o procesos de inicialización pesados.  
          </p>
          <p>
            **Prototype** permite evitar estos problemas proporcionando una forma eficiente de duplicar objetos  
            sin necesidad de conocer sus clases exactas ni repetir procesos de inicialización complejos.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Clonación de objetos en sistemas donde la creación es costosa.</li>
            <li>Desarrollo de editores gráficos con múltiples tipos de figuras.</li>
            <li>Gestión de documentos donde se necesita duplicar estructuras complejas.</li>
            <li>Creación de configuraciones predeterminadas en aplicaciones.</li>
            <li>Desarrollo de videojuegos con modelos de personajes duplicables.</li>
            <li>Implementación de buffers y estructuras de datos en memoria.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={prototypeImage} alt="Patrón Prototype" className="img-fluid" />
          <img src={prototypeImageLogo} alt="Logo Prototype" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Prototype</h2>
          <ul>
            <li>Reduce el costo de creación de objetos complejos.</li>
            <li>Permite crear copias sin depender de clases concretas.</li>
            <li>Facilita la personalización de objetos copiados sin modificar el original.</li>
            <li>Evita la sobrecarga de constructores con configuraciones repetitivas.</li>
            <li>Útil para trabajar con estructuras de datos dinámicas en memoria.</li>
            <li>Compatible con patrones como Factory Method o Abstract Factory.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Prototype</h2>
          <ul>
            <li>Puede ser complejo de implementar si los objetos contienen referencias a otros objetos.</li>
            <li>Requiere una correcta implementación del método de clonación.</li>
            <li>Puede aumentar el uso de memoria si no se maneja adecuadamente la duplicación.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Builder: Mientras Prototype crea objetos copiando uno existente, Builder los crea paso a paso. Ambos se usan para construir objetos complejos.</li>
            <li>Abstract Factory: Puede usar Prototype para crear productos clonando prototipos registrados.</li>
            <li>Singleton: En contraste con Prototype, Singleton impide múltiples instancias, mientras que Prototype facilita crearlas mediante duplicación.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`import java.util.HashMap;
import java.util.Map;

// Interfaz Prototype con el método de clonación
interface Figura extends Cloneable {
    Figura clonar();
    void renderizar();
}

// Clase concreta Círculo
class Circulo implements Figura {
    private int radio;
    
    public Circulo(int radio) {
        this.radio = radio;
    }

    @Override
    public Figura clonar() {
        return new Circulo(this.radio);
    }

    @Override
    public void renderizar() {
        System.out.println("Renderizando un círculo con radio: " + radio);
    }
}

// Clase concreta Rectángulo
class Rectangulo implements Figura {
    private int ancho, alto;
    
    public Rectangulo(int ancho, int alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    @Override
    public Figura clonar() {
        return new Rectangulo(this.ancho, this.alto);
    }

    @Override
    public void renderizar() {
        System.out.println("Renderizando un rectángulo de " + ancho + "x" + alto);
    }
}

// Clase de registro de prototipos
class RegistroPrototipos {
    private Map<String, Figura> prototipos = new HashMap<>();

    public void agregarPrototipo(String clave, Figura figura) {
        prototipos.put(clave, figura);
    }

    public Figura obtenerPrototipo(String clave) {
        return prototipos.get(clave).clonar();
    }
}

// Cliente
public class Main {
    public static void main(String[] args) {
        RegistroPrototipos registro = new RegistroPrototipos();

        // Se registran prototipos iniciales
        registro.agregarPrototipo("circulo", new Circulo(10));
        registro.agregarPrototipo("rectangulo", new Rectangulo(20, 30));

        // Se crean copias de los prototipos
        Figura figura1 = registro.obtenerPrototipo("circulo");
        Figura figura2 = registro.obtenerPrototipo("rectangulo");

        // Se renderizan los objetos clonados
        figura1.renderizar();
        figura2.renderizar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Prototype;
