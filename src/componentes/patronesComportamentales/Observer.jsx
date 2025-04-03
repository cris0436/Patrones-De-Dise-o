import React from 'react';
import observerImage from '../../assets/observer.png';
import observerImageLogo from '../../assets/observer-logo.png';

const Observer = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Observer</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que define una dependencia uno a muchos entre objetos,  
        de manera que cuando un objeto cambia de estado, todos sus dependientes son notificados automáticamente.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Observer?</h2>
          <p>
            El <strong>patrón Observer</strong> es un patrón comportamental que permite a un objeto (sujeto)  
            notificar automáticamente a múltiples objetos dependientes (observadores) sobre cualquier cambio en su estado.  
            Esto evita la necesidad de que los observadores verifiquen constantemente el estado del sujeto.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchos sistemas, distintos componentes necesitan reaccionar a cambios en otros sin estar estrechamente acoplados.  
            Observer permite desacoplar los sujetos y los observadores, mejorando la modularidad y facilitando la escalabilidad.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Implementación de eventos y suscriptores en interfaces gráficas.</li>
            <li>Notificación automática en sistemas de stock o inventario.</li>
            <li>Modelos de publicación/suscripción en sistemas de mensajería.</li>
            <li>Patrón utilizado en MVC (Model-View-Controller) para actualizar la vista cuando cambia el modelo.</li>
            <li>Sistemas de monitoreo y notificación en tiempo real.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={observerImage} alt="Patrón Observer" className="img-fluid" />
          <img src={observerImageLogo} alt="Logo Observer" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Observer</h2>
          <ul>
            <li>Desacopla el sujeto y los observadores, mejorando la modularidad.</li>
            <li>Permite añadir o quitar observadores sin modificar el sujeto.</li>
            <li>Facilita la implementación de eventos y sistemas reactivos.</li>
            <li>Escalabilidad en sistemas con múltiples suscriptores.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Observer</h2>
          <ul>
            <li>Los observadores pueden recibir muchas notificaciones innecesarias.</li>
            <li>Puede ser difícil de depurar cuando hay muchos observadores registrados.</li>
            <li>Si no se gestionan correctamente, los observadores pueden quedar en un estado inconsistente.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Mediator:</strong> Reduce las dependencias directas entre objetos, similar a Observer pero con un intermediario centralizado.
            </li>
            <li>
              <strong>Singleton:</strong> Puede usarse para asegurar que solo haya un único sujeto en el sistema.
            </li>
            <li>
              <strong>Event-driven architecture:</strong> Usa el patrón Observer para manejar eventos de manera eficiente.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz Observer
interface Observer {
    void actualizar(String mensaje);
}

// Sujeto que gestiona los observadores
class Sujeto {
    private List<Observer> observadores = new ArrayList<>();

    public void agregarObservador(Observer observador) {
        observadores.add(observador);
    }

    public void eliminarObservador(Observer observador) {
        observadores.remove(observador);
    }

    public void notificar(String mensaje) {
        for (Observer observador : observadores) {
            observador.actualizar(mensaje);
        }
    }
}

// Observador concreto
class Usuario implements Observer {
    private String nombre;

    public Usuario(String nombre) {
        this.nombre = nombre;
    }

    public void actualizar(String mensaje) {
        System.out.println(nombre + " recibió una notificación: " + mensaje);
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Sujeto canalNotificaciones = new Sujeto();

        Observer usuario1 = new Usuario("Juan");
        Observer usuario2 = new Usuario("Ana");

        canalNotificaciones.agregarObservador(usuario1);
        canalNotificaciones.agregarObservador(usuario2);

        canalNotificaciones.notificar("¡Nuevo video disponible!");

        canalNotificaciones.eliminarObservador(usuario1);

        canalNotificaciones.notificar("¡En vivo ahora!");
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Observer;
