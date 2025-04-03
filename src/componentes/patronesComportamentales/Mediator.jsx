import React from 'react';
import mediatorImage from '../../assets/mediator.png';
import mediatorImageLogo from '../../assets/mediator-logo.png';

const Mediator = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Mediator</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que facilita la comunicación entre múltiples objetos sin que estos se refieran directamente entre sí.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Mediator?</h2>
          <p>
            El <strong>patrón Mediator</strong> centraliza la comunicación entre objetos, evitando la dependencia directa entre ellos.  
            En lugar de que los objetos interactúen entre sí, se comunican a través de un mediador que coordina la interacción.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En sistemas con múltiples objetos que deben interactuar, la comunicación directa puede generar una red compleja de dependencias.  
            El Mediator reduce este acoplamiento al actuar como un intermediario centralizado, mejorando la mantenibilidad y escalabilidad.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Implementación de sistemas de chat o mensajería en tiempo real.</li>
            <li>Gestión de eventos en interfaces gráficas donde múltiples componentes deben comunicarse.</li>
            <li>Coordinación de procesos en sistemas distribuidos.</li>
            <li>Control del tráfico en juegos para evitar colisiones entre múltiples entidades.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={mediatorImage} alt="Patrón Mediator" className="img-fluid" />
          <img src={mediatorImageLogo} alt="Logo Mediator" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Mediator</h2>
          <ul>
            <li>Reduce el acoplamiento entre objetos al evitar referencias directas.</li>
            <li>Facilita la escalabilidad y mantenibilidad del código.</li>
            <li>Mejora la organización en sistemas con múltiples objetos que interactúan.</li>
            <li>Promueve el principio de responsabilidad única (SRP) al delegar la comunicación en un solo punto.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Mediator</h2>
          <ul>
            <li>Puede convertirse en un punto único de fallo si no se gestiona correctamente.</li>
            <li>El mediador puede volverse demasiado complejo si maneja muchas interacciones.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Observer:</strong> Ambos patrones gestionan la comunicación entre objetos, pero Mediator centraliza el control, mientras que Observer notifica cambios a múltiples suscriptores.
            </li>
            <li>
              <strong>Facade:</strong> Similar a Mediator en que oculta interacciones complejas, pero Facade simplifica la interfaz de un sistema sin gestionar la comunicación interna.
            </li>
            <li>
              <strong>Command:</strong> Puede combinarse con Mediator para desacoplar el envío y procesamiento de comandos en un sistema.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz del Mediador
interface ChatMediator {
    void enviarMensaje(String mensaje, Usuario usuario);
    void agregarUsuario(Usuario usuario);
}

// Implementación del Mediador
class ChatMediatorConcreto implements ChatMediator {
    private List<Usuario> usuarios = new ArrayList<>();

    public void agregarUsuario(Usuario usuario) {
        usuarios.add(usuario);
    }

    public void enviarMensaje(String mensaje, Usuario usuario) {
        for (Usuario u : usuarios) {
            if (u != usuario) {
                u.recibirMensaje(mensaje);
            }
        }
    }
}

// Clase Usuario que interactúa con el Mediador
class Usuario {
    private String nombre;
    private ChatMediator mediator;

    public Usuario(String nombre, ChatMediator mediator) {
        this.nombre = nombre;
        this.mediator = mediator;
    }

    public void enviarMensaje(String mensaje) {
        System.out.println(nombre + " envía: " + mensaje);
        mediator.enviarMensaje(mensaje, this);
    }

    public void recibirMensaje(String mensaje) {
        System.out.println(nombre + " recibe: " + mensaje);
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        ChatMediator chat = new ChatMediatorConcreto();

        Usuario usuario1 = new Usuario("Juan", chat);
        Usuario usuario2 = new Usuario("Ana", chat);
        Usuario usuario3 = new Usuario("Carlos", chat);

        chat.agregarUsuario(usuario1);
        chat.agregarUsuario(usuario2);
        chat.agregarUsuario(usuario3);

        usuario1.enviarMensaje("Hola a todos!");
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Mediator;

