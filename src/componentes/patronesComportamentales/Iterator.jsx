import React from 'react';
import iteratorImage from '../../assets/iterator.png';
import iteratorImageLogo from '../../assets/iterator-logo.png';

const Iterator = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Iterator</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite recorrer colecciones de objetos sin exponer su implementación interna.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Iterator?</h2>
          <p>
            El <strong>patrón Iterator</strong> proporciona una forma de acceder secuencialmente a los elementos de una colección sin exponer su estructura interna.  
            Se usa comúnmente en estructuras de datos como listas, árboles y conjuntos.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos casos, recorrer una colección de elementos puede hacer que el código dependa demasiado de la implementación interna de la colección.  
            Iterator soluciona este problema al definir una interfaz estándar para acceder a los elementos de manera uniforme y desacoplada.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Recorrido de estructuras de datos sin conocer su implementación.</li>
            <li>Implementación de listas personalizadas que requieren un acceso controlado.</li>
            <li>Acceso secuencial a bases de datos o grandes conjuntos de datos.</li>
            <li>Recorrido de árboles en algoritmos de inteligencia artificial y búsqueda.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={iteratorImage} alt="Patrón Iterator" className="img-fluid" />
          <img src={iteratorImageLogo} alt="Logo Iterator" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Iterator</h2>
          <ul>
            <li>Desacopla la estructura interna de una colección del código que la recorre.</li>
            <li>Permite múltiples formas de iteración (ejemplo: hacia adelante, hacia atrás, etc.).</li>
            <li>Facilita el acceso secuencial a datos sin exponer su estructura interna.</li>
            <li>Se puede combinar con otros patrones como Composite y Factory Method.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Iterator</h2>
          <ul>
            <li>Puede aumentar la complejidad si se usa en estructuras de datos simples.</li>
            <li>En algunos casos, puede consumir más memoria al mantener referencias a elementos previos.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Composite:</strong> Se usa junto con Iterator para recorrer estructuras jerárquicas de objetos de manera uniforme.
            </li>
            <li>
              <strong>Visitor:</strong> Permite realizar operaciones sobre elementos de una colección sin modificar sus clases.
            </li>
            <li>
              <strong>Factory Method:</strong> Puede usarse para crear iteradores específicos según el tipo de colección.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz del iterador
interface Iterador<T> {
    boolean tieneSiguiente();
    T siguiente();
}

// Implementación del iterador para una lista de enteros
class ListaNumeros {
    private List<Integer> numeros = new ArrayList<>();

    public void agregar(int numero) {
        numeros.add(numero);
    }

    public Iterador<Integer> getIterador() {
        return new IteradorLista();
    }

    private class IteradorLista implements Iterador<Integer> {
        private int posicion = 0;

        public boolean tieneSiguiente() {
            return posicion < numeros.size();
        }

        public Integer siguiente() {
            return numeros.get(posicion++);
        }
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        ListaNumeros lista = new ListaNumeros();
        lista.agregar(1);
        lista.agregar(2);
        lista.agregar(3);

        Iterador<Integer> iterador = lista.getIterador();
        while (iterador.tieneSiguiente()) {
            System.out.println(iterador.siguiente());
        }
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Iterator;
