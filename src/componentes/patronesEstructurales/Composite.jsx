import React from 'react';
import compositeImage from '../../assets/composite.png';
import compositeImageLogo from '../../assets/composite-logo.png';

const Composite = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Composite</h1>
      <p className="lead text-center">
        Un patrón estructural que permite tratar objetos individuales y composiciones de objetos de manera uniforme.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Composite?</h2>
          <p>
            El <strong>patrón Composite</strong> es un patrón estructural que permite construir estructuras jerárquicas de objetos y tratarlas de manera uniforme.
            Se basa en el uso de una estructura de árbol donde tanto los objetos individuales como las composiciones de objetos pueden ser manipulados de la misma forma.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchas aplicaciones, es común tener estructuras de datos jerárquicas donde los elementos pueden contener subelementos, como en menús, estructuras de carpetas o sistemas gráficos.  
            **Composite** permite tratar tanto elementos individuales como grupos de elementos de la misma manera, facilitando la gestión y manipulación de estos.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Representación de estructuras jerárquicas como árboles de archivos y carpetas.</li>
            <li>Construcción de interfaces gráficas donde los componentes pueden contener subcomponentes.</li>
            <li>Modelado de organizaciones con empleados y gerentes en estructuras anidadas.</li>
            <li>Definición de menús y submenús en aplicaciones.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={compositeImage} alt="Patrón Composite" className="img-fluid" />
          <img src={compositeImageLogo} alt="Logo Composite" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Composite</h2>
          <ul>
            <li>Facilita la manipulación de estructuras jerárquicas complejas.</li>
            <li>Permite tratar objetos individuales y grupos de objetos de la misma manera.</li>
            <li>Reduce la necesidad de escribir código específico para manejar diferentes tipos de objetos.</li>
            <li>Favorece el principio de **abierto/cerrado** (OCP) de SOLID.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Composite</h2>
          <ul>
            <li>Puede hacer que el código sea más complejo debido a la necesidad de manejar estructuras recursivas.</li>
            <li>Requiere un diseño cuidadoso para evitar dependencias innecesarias.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Decorator: Ambos permiten estructurar objetos, pero Composite maneja jerarquías mientras que Decorator añade funcionalidades.</li>
            <li>Bridge: Puede usarse con Composite para desacoplar implementaciones en estructuras jerárquicas.</li>
            <li>Iterator: Puede recorrer estructuras Composite sin exponer su representación interna.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Componente base
interface Componente {
    void mostrar();
}

// Componente hoja
class Archivo implements Componente {
    private String nombre;

    public Archivo(String nombre) {
        this.nombre = nombre;
    }

    public void mostrar() {
        System.out.println("Archivo: " + nombre);
    }
}

// Componente compuesto
class Carpeta implements Componente {
    private String nombre;
    private List<Componente> elementos = new ArrayList<>();

    public Carpeta(String nombre) {
        this.nombre = nombre;
    }

    public void agregar(Componente componente) {
        elementos.add(componente);
    }

    public void mostrar() {
        System.out.println("Carpeta: " + nombre);
        for (Componente elemento : elementos) {
            elemento.mostrar();
        }
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Componente archivo1 = new Archivo("Documento1.txt");
        Componente archivo2 = new Archivo("Imagen.png");

        Carpeta carpeta = new Carpeta("Mis Archivos");
        carpeta.agregar(archivo1);
        carpeta.agregar(archivo2);

        carpeta.mostrar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Composite;
