import React from 'react';

import adapterImage from '../../assets/adapter.jpg';
import adapterImageLogo from '../../assets/adapter-logo.png';

const Adapter = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Adapter</h1>
      <p className="lead text-center">
        Un patrón estructural que permite que interfaces incompatibles trabajen juntas sin modificar su código fuente.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Adapter?</h2>
          <p>
            El <strong>patrón Adapter</strong> actúa como un intermediario entre dos interfaces incompatibles, 
            permitiendo que sistemas o clases con diferentes estructuras de datos puedan comunicarse sin necesidad de modificar su código original.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos sistemas, es común encontrar clases que fueron diseñadas de manera independiente y no pueden interactuar debido a diferencias en sus interfaces.  
            El patrón Adapter resuelve este problema al traducir una interfaz en otra que el cliente pueda entender.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Integración de bibliotecas externas con código propio.</li>
            <li>Compatibilidad entre versiones antiguas y nuevas de una API.</li>
            <li>Conversión de formatos de datos entre sistemas.</li>
            <li>Uso de una base de datos diferente sin cambiar la lógica de negocio.</li>
            <li>Interoperabilidad entre componentes de software desarrollados por distintos equipos.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={adapterImage} alt="Patrón Adapter" className="img-fluid" />
          <img src={adapterImageLogo} alt="Logo Adapter" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Adapter</h2>
          <ul>
            <li>Permite la reutilización de código sin modificar las clases originales.</li>
            <li>Facilita la integración de nuevos componentes en sistemas existentes.</li>
            <li>Mejora la compatibilidad entre diferentes interfaces.</li>
            <li>Favorece el principio de **responsabilidad única** (SRP) de SOLID.</li>
            <li>Reduce el acoplamiento entre sistemas y facilita la escalabilidad.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Adapter</h2>
          <ul>
            <li>Añade una capa adicional de abstracción, lo que puede afectar el rendimiento.</li>
            <li>Puede aumentar la complejidad del código si se usa en exceso.</li>
            <li>Un diseño incorrecto puede generar adaptadores innecesarios.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Decorator: Ambos modifican el comportamiento de un objeto, pero Adapter cambia la interfaz mientras que Decorator añade funcionalidad.</li>
            <li>Facade: Proporciona una interfaz simplificada a un conjunto de interfaces complejas.</li>
            <li>Bridge: Separa la abstracción de su implementación, mientras que Adapter traduce interfaces incompatibles.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz existente que espera el cliente
interface EnchufeEuropeo {
    void conectar();
}

// Implementación específica de un enchufe europeo
class EnchufeEuropeoImpl implements EnchufeEuropeo {
    public void conectar() {
        System.out.println("Conectado a un enchufe europeo.");
    }
}

// Interfaz incompatible que queremos adaptar
class EnchufeAmericano {
    public void enchufar() {
        System.out.println("Conectado a un enchufe americano.");
    }
}

// Adaptador que permite usar un enchufe americano como si fuera europeo
class AdaptadorAmericanoAEuropeo implements EnchufeEuropeo {
    private EnchufeAmericano enchufeAmericano;

    public AdaptadorAmericanoAEuropeo(EnchufeAmericano enchufeAmericano) {
        this.enchufeAmericano = enchufeAmericano;
    }

    public void conectar() {
        enchufeAmericano.enchufar();
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        // Usando un enchufe europeo normalmente
        EnchufeEuropeo enchufeEuropeo = new EnchufeEuropeoImpl();
        enchufeEuropeo.conectar();

        // Adaptando un enchufe americano a europeo
        EnchufeAmericano enchufeAmericano = new EnchufeAmericano();
        EnchufeEuropeo adaptador = new AdaptadorAmericanoAEuropeo(enchufeAmericano);
        adaptador.conectar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Adapter;
