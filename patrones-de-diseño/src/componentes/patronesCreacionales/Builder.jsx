import React from 'react';
import builderImage from '../../assets/builder.png';
import builderImageLogo from '../../assets/builder-logo.png';

const Builder = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Builder</h1>
      <p className="lead text-center">
        Un patrón de diseño creacional que permite la construcción de objetos complejos paso a paso.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Builder?</h2>
          <p>
            El <strong>patrón Builder</strong> es un patrón de diseño creacional que se utiliza para construir objetos de manera flexible y organizada.  
            A diferencia de los constructores tradicionales con muchos parámetros, **Builder** permite crear objetos en múltiples pasos,  
            haciendo que el código sea más legible y mantenible.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            Cuando una clase tiene múltiples parámetros opcionales, el uso de constructores con demasiados argumentos puede hacer que el código  
            sea difícil de entender y propenso a errores. **Builder** resuelve este problema separando la construcción del objeto de su representación final,  
            permitiendo definir solo los atributos necesarios en cada caso.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Construcción de objetos con múltiples configuraciones opcionales.</li>
            <li>Creación de documentos complejos con diferentes formatos.</li>
            <li>Generación de consultas SQL de manera programática.</li>
            <li>Construcción de interfaces gráficas personalizadas.</li>
            <li>Definición de objetos en sistemas de reportes dinámicos.</li>
            <li>Configuración flexible de objetos en frameworks de pruebas.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={builderImage} alt="Patrón Builder" className="img-fluid" />
          <img src={builderImageLogo} alt="Logo Builder" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Builder</h2>
          <ul>
            <li>Permite la creación de objetos complejos de manera estructurada.</li>
            <li>Hace que el código sea más legible y fácil de entender.</li>
            <li>Evita constructores con demasiados parámetros.</li>
            <li>Permite construir objetos paso a paso, sin afectar su inmutabilidad.</li>
            <li>Facilita la extensión y modificación del código sin afectar clientes existentes.</li>
            <li>Es útil cuando se necesitan diferentes representaciones del mismo objeto.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Builder</h2>
          <ul>
            <li>Añade complejidad al código cuando los objetos son simples.</li>
            <li>Puede aumentar la cantidad de código debido a la creación de múltiples clases Builder.</li>
            <li>Requiere más memoria debido a la creación de objetos intermedios antes del producto final.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Abstract Factory: Ambos separan la creación del objeto del uso, pero Abstract Factory crea varios objetos relacionados, mientras Builder se enfoca en un solo objeto complejo.</li>
            <li>Prototype: Si se quiere construir un objeto a partir de una copia de otro, se puede usar Prototype en lugar de Builder.</li>
            <li>Composite: Builder a veces se utiliza junto con Composite cuando los objetos que se están construyendo tienen una estructura jerárquica (por ejemplo, árboles de elementos).</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`public class Producto {
    private String nombre;
    private double precio;
    private String categoria;

    // Constructor privado para forzar el uso del Builder
    private Producto(Builder builder) {
        this.nombre = builder.nombre;
        this.precio = builder.precio;
        this.categoria = builder.categoria;
    }

    public static class Builder {
        private String nombre;
        private double precio;
        private String categoria;

        public Builder setNombre(String nombre) {
            this.nombre = nombre;
            return this;
        }

        public Builder setPrecio(double precio) {
            this.precio = precio;
            return this;
        }

        public Builder setCategoria(String categoria) {
            this.categoria = categoria;
            return this;
        }

        public Producto build() {
            return new Producto(this);
        }
    }

    @Override
    public String toString() {
        return "Producto: " + nombre + ", Precio: " + precio + ", Categoría: " + categoria;
    }

    public static void main(String[] args) {
        // Uso del patrón Builder
        Producto producto = new Producto.Builder()
            .setNombre("Laptop")
            .setPrecio(1200.99)
            .setCategoria("Electrónica")
            .build();

        System.out.println(producto);
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Builder;
