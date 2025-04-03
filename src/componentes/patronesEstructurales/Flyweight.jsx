import React from 'react';
import flyweightImage from '../../assets/flyweight.png';
import flyweightImageLogo from '../../assets/flyweight-logo.png';

const Flyweight = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Flyweight</h1>
      <p className="lead text-center">
        Un patrón estructural que permite optimizar el uso de memoria compartiendo objetos comunes en lugar de crear instancias duplicadas.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Flyweight?</h2>
          <p>
            El <strong>patrón Flyweight</strong> es un patrón estructural que permite reducir el uso de memoria compartiendo objetos en lugar de crear múltiples instancias similares.
            Se usa cuando una gran cantidad de objetos comparten datos idénticos y su almacenamiento individual resultaría ineficiente.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En sistemas donde se crean muchas instancias de objetos similares, el consumo de memoria puede ser alto e ineficiente.  
            **Flyweight** permite compartir información común entre múltiples instancias, reduciendo la sobrecarga de memoria y mejorando el rendimiento.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Renderizado de gráficos donde múltiples elementos comparten características (ej. fuentes de texto).</li>
            <li>Gestión de caracteres en editores de texto para evitar la duplicación de datos.</li>
            <li>Almacenamiento en caché de objetos pesados en juegos y simulaciones.</li>
            <li>Optimización de estructuras de datos en bases de datos y motores de búsqueda.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={flyweightImage} alt="Patrón Flyweight" className="img-fluid" />
          <img src={flyweightImageLogo} alt="Logo Flyweight" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Flyweight</h2>
          <ul>
            <li>Reduce el uso de memoria al compartir objetos.</li>
            <li>Mejora el rendimiento en sistemas con gran cantidad de objetos similares.</li>
            <li>Optimiza el almacenamiento en caché y la reutilización de instancias.</li>
            <li>Es compatible con otros patrones como Factory Method y Singleton.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Flyweight</h2>
          <ul>
            <li>Puede aumentar la complejidad del código debido a la gestión de objetos compartidos.</li>
            <li>No es útil si los objetos requieren datos únicos en cada instancia.</li>
            <li>Requiere un diseño eficiente para determinar qué información se puede compartir.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Singleton: Ambos optimizan el uso de memoria, pero Flyweight comparte múltiples instancias mientras que Singleton mantiene solo una.</li>
            <li>Factory Method: Puede usarse junto con Flyweight para controlar la creación de objetos compartidos.</li>
            <li>Prototype: Puede complementar a Flyweight cuando se necesiten múltiples copias con ligeras modificaciones.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`import java.util.HashMap;
import java.util.Map;

// Interfaz Flyweight
interface Circulo {
    void dibujar();
}

// Implementación concreta del Flyweight
class CirculoConcreto implements Circulo {
    private String color; // Estado compartido
    private int x, y, radio; // Estado único

    public CirculoConcreto(String color) {
        this.color = color;
    }

    public void setPosicion(int x, int y, int radio) {
        this.x = x;
        this.y = y;
        this.radio = radio;
    }

    public void dibujar() {
        System.out.println("Dibujando círculo color " + color + 
                           " en posición (" + x + ", " + y + ") con radio " + radio);
    }
}

// Flyweight Factory
class CirculoFactory {
    private static final Map<String, Circulo> circulos = new HashMap<>();

    public static Circulo getCirculo(String color) {
        Circulo circulo = circulos.get(color);
        if (circulo == null) {
            circulo = new CirculoConcreto(color);
            circulos.put(color, circulo);
            System.out.println("Creando nuevo círculo de color: " + color);
        }
        return circulo;
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Circulo circulo1 = CirculoFactory.getCirculo("Rojo");
        ((CirculoConcreto) circulo1).setPosicion(10, 20, 5);
        circulo1.dibujar();

        Circulo circulo2 = CirculoFactory.getCirculo("Rojo");
        ((CirculoConcreto) circulo2).setPosicion(30, 40, 10);
        circulo2.dibujar();

        Circulo circulo3 = CirculoFactory.getCirculo("Azul");
        ((CirculoConcreto) circulo3).setPosicion(50, 60, 15);
        circulo3.dibujar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Flyweight;
