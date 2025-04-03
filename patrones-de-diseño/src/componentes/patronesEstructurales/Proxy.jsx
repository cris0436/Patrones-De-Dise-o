import React from 'react';
import proxyImage from '../../assets/proxy.png';
import proxyImageLogo from '../../assets/proxy-logo.png';

const Proxy = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Proxy</h1>
      <p className="lead text-center">
        Un patrón de diseño estructural que proporciona un sustituto o intermediario para acceder a un objeto, controlando su acceso y comportamiento.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Proxy?</h2>
          <p>
            El <strong>patrón Proxy</strong> es un patrón de diseño estructural que actúa como intermediario entre el cliente y un objeto real.  
            Su objetivo es controlar el acceso a dicho objeto, permitiendo agregar funcionalidad adicional como control de acceso, caché o carga diferida (lazy loading).
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En algunos casos, acceder a un objeto puede ser costoso o representar riesgos de seguridad.  
            **Proxy** permite interceptar las llamadas a este objeto para aplicar reglas adicionales, 
            evitando accesos innecesarios o peligrosos.  
          </p>
          <p>
            Es útil cuando un objeto real requiere validaciones, control de permisos o administración de recursos antes de ser utilizado directamente.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Control de acceso y autenticación de usuarios.</li>
            <li>Optimización con almacenamiento en caché.</li>
            <li>Control de carga diferida (lazy loading) en objetos pesados.</li>
            <li>Restricción de acceso a recursos costosos en términos de rendimiento.</li>
            <li>Registro y monitoreo de operaciones sobre un objeto.</li>
            <li>Implementación de proxys remotos en aplicaciones distribuidas.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={proxyImage} alt="Patrón Proxy" className="img-fluid" />
          <img src={proxyImageLogo} alt="Logo Proxy" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Proxy</h2>
          <ul>
            <li>Mejora el rendimiento al aplicar almacenamiento en caché.</li>
            <li>Permite la implementación de control de acceso y seguridad.</li>
            <li>Facilita la carga diferida de objetos pesados (lazy loading).</li>
            <li>Reduce el acoplamiento entre el cliente y el objeto real.</li>
            <li>Permite registrar y monitorear el uso del objeto real.</li>
            <li>Facilita la integración con sistemas remotos al actuar como intermediario.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Proxy</h2>
          <ul>
            <li>Añade complejidad innecesaria si no se necesita control de acceso.</li>
            <li>Puede afectar el rendimiento si se usa incorrectamente.</li>
            <li>Introduce un nivel adicional de indirección que puede dificultar la depuración.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>Decorator: Ambos patrones envuelven un objeto para agregar funcionalidad, pero el Proxy controla el acceso mientras que el Decorator lo extiende.</li>
            <li>Adapter: Mientras que Proxy controla el acceso, Adapter cambia la interfaz del objeto para hacerla compatible con otro sistema.</li>
            <li>Facade: A diferencia de Proxy, que actúa sobre un objeto, Facade proporciona una interfaz simplificada para un conjunto de objetos.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz común para el objeto real y el Proxy
interface Servicio {
    void operacion();
}

// Implementación del servicio real
class ServicioReal implements Servicio {
    public void operacion() {
        System.out.println("Ejecutando operación en el servicio real...");
    }
}

// Proxy que controla el acceso al servicio real
class ProxyServicio implements Servicio {
    private ServicioReal servicioReal;
    private boolean tienePermiso;

    public ProxyServicio(boolean tienePermiso) {
        this.tienePermiso = tienePermiso;
    }

    public void operacion() {
        if (!tienePermiso) {
            System.out.println("Acceso denegado: No tiene permiso para ejecutar la operación.");
            return;
        }

        if (servicioReal == null) {
            servicioReal = new ServicioReal();
        }

        System.out.println("Acceso concedido. Delegando operación al servicio real...");
        servicioReal.operacion();
    }
}

// Cliente que usa el Proxy
public class Cliente {
    public static void main(String[] args) {
        Servicio proxyConAcceso = new ProxyServicio(true);
        Servicio proxySinAcceso = new ProxyServicio(false);

        System.out.println("Intentando acceder con permisos:");
        proxyConAcceso.operacion();

        System.out.println("\\nIntentando acceder sin permisos:");
        proxySinAcceso.operacion();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Proxy;
