import React from 'react';
import chainImage from '../../assets/ChainOfResponsibility.png';
import chainImageLogo from '../../assets/chain-of-responsibility-logo.png';

const ChainOfResponsibility = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Chain of Responsibility</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite pasar solicitudes a través de una cadena de manejadores hasta que uno de ellos la procese.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Chain of Responsibility?</h2>
          <p>
            El <strong>patrón Chain of Responsibility</strong> permite desacoplar el emisor de una solicitud de sus posibles receptores,  
            al encadenar múltiples objetos que pueden procesarla. Cada manejador en la cadena decide si procesa la solicitud o la pasa al siguiente manejador.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            Este patrón ayuda a evitar estructuras condicionales complejas cuando múltiples objetos pueden manejar una solicitud.  
            En lugar de definir todos los posibles escenarios dentro de un solo objeto, los manejadores pueden ser agregados o modificados de manera independiente.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Gestión de permisos y autenticación.</li>
            <li>Procesamiento de eventos en interfaces gráficas.</li>
            <li>Manipulación de peticiones HTTP en middleware.</li>
            <li>Filtros en sistemas de validación de datos.</li>
            <li>Manejo de excepciones en sistemas complejos.</li>
          </ul>
        
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Decorator:</strong> Ambos patrones pueden encadenar objetos, pero Chain of Responsibility pasa la solicitud mientras que Decorator modifica el comportamiento.
            </li>
            <li>
              <strong>Command:</strong> Puede combinarse con Chain of Responsibility para procesar comandos en diferentes niveles.
            </li>
            <li>
              <strong>Observer:</strong> Mientras Observer notifica múltiples suscriptores, Chain of Responsibility pasa una solicitud hasta que alguien la maneje.
            </li>
          </ul>
        
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={chainImage} alt="Patrón Chain of Responsibility" className="img-fluid" />
          <img src={chainImageLogo} alt="Logo Chain of Responsibility" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Chain of Responsibility</h2>
          <ul>
            <li>Desacopla el emisor de la solicitud de sus manejadores.</li>
            <li>Permite modificar la cadena de responsabilidad sin alterar el código del cliente.</li>
            <li>Favorece el principio de **abierto/cerrado** (OCP) de SOLID.</li>
            <li>Reduce la cantidad de condicionales anidados en el código.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Chain of Responsibility</h2>
          <ul>
            <li>Si la cadena es demasiado larga, puede afectar el rendimiento.</li>
            <li>No garantiza que la solicitud será procesada si ningún manejador la reconoce.</li>
            <li>Puede dificultar la depuración si hay muchos manejadores encadenados.</li>
          </ul>
        </div>
        
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz para los manejadores
abstract class Manejador {
    protected Manejador siguiente;

    public void setSiguiente(Manejador siguiente) {
        this.siguiente = siguiente;
    }

    public abstract void manejarPeticion(String tipo);
}

// Manejador concreto para peticiones de autenticación
class ManejadorAutenticacion extends Manejador {
    public void manejarPeticion(String tipo) {
        if (tipo.equals("autenticacion")) {
            System.out.println("Procesando autenticación...");
        } else if (siguiente != null) {
            siguiente.manejarPeticion(tipo);
        }
    }
}

// Manejador concreto para peticiones de autorización
class ManejadorAutorizacion extends Manejador {
    public void manejarPeticion(String tipo) {
        if (tipo.equals("autorizacion")) {
            System.out.println("Verificando permisos...");
        } else if (siguiente != null) {
            siguiente.manejarPeticion(tipo);
        }
    }
}

// Manejador concreto para peticiones de validación de datos
class ManejadorValidacion extends Manejador {
    public void manejarPeticion(String tipo) {
        if (tipo.equals("validacion")) {
            System.out.println("Validando datos de la solicitud...");
        } else if (siguiente != null) {
            siguiente.manejarPeticion(tipo);
        }
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Manejador auth = new ManejadorAutenticacion();
        Manejador permisos = new ManejadorAutorizacion();
        Manejador validacion = new ManejadorValidacion();

        // Configuración de la cadena de responsabilidad
        auth.setSiguiente(permisos);
        permisos.setSiguiente(validacion);

        // Procesar solicitudes
        auth.manejarPeticion("autenticacion");
        auth.manejarPeticion("autorizacion");
        auth.manejarPeticion("validacion");
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default ChainOfResponsibility;
