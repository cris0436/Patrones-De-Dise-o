import React from 'react';
import visitorImage from '../../assets/visitor.png';
import visitorImageLogo from '../../assets/visitor-logo.png';

const Visitor = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Visitor</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite agregar nuevas operaciones a objetos sin modificar sus clases.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Visitor?</h2>
          <p>
            El <strong>patrón Visitor</strong> permite agregar nuevas funcionalidades a una jerarquía de clases sin modificar su código original.  
            En lugar de definir el comportamiento dentro de las propias clases, se usa una clase externa llamada <strong>"Visitante"</strong>,  
            que puede ser aplicada a múltiples tipos de objetos.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            Cuando se necesita agregar operaciones a una jerarquía de clases sin modificar sus estructuras,  
            el <strong>Visitor</strong> permite extenderlas de manera no intrusiva. Esto es útil en escenarios donde la lógica de negocio cambia con frecuencia  
            o se requiere aplicar múltiples operaciones sobre los mismos objetos.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Procesamiento de estructuras de datos complejas como árboles y composiciones.</li>
            <li>Generación de reportes para diferentes tipos de objetos.</li>
            <li>Optimización de operaciones sobre estructuras de objetos (ej. compiladores).</li>
            <li>Aplicación de operaciones a estructuras jerárquicas sin modificar las clases existentes.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={visitorImage} alt="Patrón Visitor" className="img-fluid" />
          <img src={visitorImageLogo} alt="Logo Visitor" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Visitor</h2>
          <ul>
            <li>Permite agregar nuevas operaciones sin modificar las clases originales.</li>
            <li>Facilita la extensión del código siguiendo el principio de **abierto/cerrado** (OCP).</li>
            <li>Encapsula las operaciones fuera de la jerarquía de clases, mejorando la separación de responsabilidades.</li>
            <li>Facilita el procesamiento de estructuras de datos complejas como árboles de sintaxis.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Visitor</h2>
          <ul>
            <li>Añade complejidad al código, ya que requiere modificar todas las clases para aceptar visitantes.</li>
            <li>Puede hacer que la jerarquía de clases sea más difícil de mantener si se agregan muchos visitantes.</li>
            <li>No es adecuado cuando la jerarquía de clases cambia con frecuencia, ya que cada nueva clase necesita implementar la interfaz `accept()`.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Composite:</strong> Se usa junto con Visitor para recorrer estructuras jerárquicas de objetos.
            </li>
            <li>
              <strong>Iterator:</strong> Puede trabajar en conjunto con Visitor para recorrer estructuras complejas.
            </li>
            <li>
              <strong>Strategy:</strong> Mientras Strategy define un conjunto de algoritmos intercambiables, Visitor permite agregar nuevas operaciones sin modificar la estructura de clases.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz del visitante
interface Visitor {
    void visitCirculo(Circulo c);
    void visitRectangulo(Rectangulo r);
}

// Interfaz para las figuras geométricas
interface Figura {
    void aceptar(Visitor visitor);
}

// Clase concreta Circulo
class Circulo implements Figura {
    public void aceptar(Visitor visitor) {
        visitor.visitCirculo(this);
    }
}

// Clase concreta Rectangulo
class Rectangulo implements Figura {
    public void aceptar(Visitor visitor) {
        visitor.visitRectangulo(this);
    }
}

// Implementación de un visitante concreto que calcula el área
class CalculadorArea implements Visitor {
    public void visitCirculo(Circulo c) {
        System.out.println("Calculando área del círculo.");
    }

    public void visitRectangulo(Rectangulo r) {
        System.out.println("Calculando área del rectángulo.");
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Figura[] figuras = { new Circulo(), new Rectangulo() };
        Visitor calculador = new CalculadorArea();

        for (Figura figura : figuras) {
            figura.aceptar(calculador);
        }
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Visitor;
