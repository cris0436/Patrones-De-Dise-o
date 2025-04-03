import React from 'react';
import stateImage from '../../assets/state.png';
import stateImageLogo from '../../assets/state-logo.png';

const State = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño State</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite que un objeto altere su comportamiento cuando su estado interno cambia.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el State?</h2>
          <p>
            El <strong>patrón State</strong> permite que un objeto cambie su comportamiento cuando cambia su estado interno.  
            Se basa en encapsular los distintos estados en clases separadas, delegando la lógica de transición a estas clases.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            Sin el patrón State, el código se llena de declaraciones condicionales (`if-else` o `switch`)  
            para manejar diferentes estados, lo que dificulta su mantenimiento.  
            State permite estructurar el código de manera más organizada y escalable.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Máquinas de estados como cajeros automáticos o sistemas de autenticación.</li>
            <li>Implementación de estados en videojuegos (Ej. personaje en reposo, corriendo, atacando).</li>
            <li>Gestión de ciclo de vida en aplicaciones con múltiples modos o permisos.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={stateImage} alt="Patrón State" className="img-fluid" />
          <img src={stateImageLogo} alt="Logo State" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del State</h2>
          <ul>
            <li>Elimina condicionales complejas en el código.</li>
            <li>Facilita la adición de nuevos estados sin modificar la lógica principal.</li>
            <li>Promueve el principio de responsabilidad única (SRP) al separar cada estado en su propia clase.</li>
            <li>Fomenta la reutilización y modularidad del código.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del State</h2>
          <ul>
            <li>Puedes aumentar el número de clases en el sistema.</li>
            <li>El cambio entre estados puede generar una sobrecarga si no se maneja adecuadamente.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Strategy:</strong> Ambos patrones encapsulan comportamientos, pero Strategy selecciona un algoritmo dinámicamente mientras que State cambia el comportamiento según el estado interno.
            </li>
            <li>
              <strong>Observer:</strong> Puede utilizarse junto con State para notificar cambios en el estado de un objeto.
            </li>
            <li>
              <strong>Singleton:</strong> Algunos estados pueden implementarse como instancias únicas para compartir el mismo comportamiento.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz Estado
interface Estado {
    void manejar();
}

// Estado Concreto: Estado Activo
class EstadoActivo implements Estado {
    public void manejar() {
        System.out.println("El sistema está en estado activo.");
    }
}

// Estado Concreto: Estado Inactivo
class EstadoInactivo implements Estado {
    public void manejar() {
        System.out.println("El sistema está en estado inactivo.");
    }
}

// Contexto
class Sistema {
    private Estado estado;

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public void ejecutarAccion() {
        estado.manejar();
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Sistema sistema = new Sistema();

        Estado activo = new EstadoActivo();
        Estado inactivo = new EstadoInactivo();

        sistema.setEstado(activo);
        sistema.ejecutarAccion();

        sistema.setEstado(inactivo);
        sistema.ejecutarAccion();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default State;
