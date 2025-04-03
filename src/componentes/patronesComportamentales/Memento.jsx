import React from 'react';
import mementoImage from '../../assets/memento.png';
import mementoImageLogo from '../../assets/memento-logo.png';

const Memento = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Memento</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite capturar y restaurar el estado interno de un objeto sin violar el principio de encapsulación.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Memento?</h2>
          <p>
            El <strong>patrón Memento</strong> permite guardar el estado interno de un objeto y restaurarlo más tarde sin exponer detalles internos.  
            Es útil para funcionalidades de "deshacer" en aplicaciones.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En algunos casos, es necesario restaurar el estado previo de un objeto sin modificar su implementación.  
            Usar accesores públicos o serialización podría romper el encapsulamiento.  
            Memento permite gestionar estos estados sin comprometer la estructura interna del objeto.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Funcionalidades de "Deshacer" y "Rehacer" en editores de texto o gráficos.</li>
            <li>Gestión de estados en juegos (guardado y carga de progreso).</li>
            <li>Almacenamiento de configuraciones previas en sistemas.</li>
            <li>Simulación de versiones en bases de datos o documentos.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={mementoImage} alt="Patrón Memento" className="img-fluid" />
          <img src={mementoImageLogo} alt="Logo Memento" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Memento</h2>
          <ul>
            <li>Preserva el principio de **encapsulación**, evitando exponer detalles internos.</li>
            <li>Permite implementar sistemas de deshacer/rehacer de manera estructurada.</li>
            <li>Facilita la gestión de versiones y estados previos de objetos.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Memento</h2>
          <ul>
            <li>Pueden generarse muchos objetos Memento si se guardan estados con frecuencia.</li>
            <li>El almacenamiento de estados puede consumir muchos recursos si no se optimiza.</li>
            <li>No hay un mecanismo automático para limpiar estados obsoletos.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Command:</strong> Se usa junto con Memento para implementar "Deshacer" y "Rehacer".
            </li>
            <li>
              <strong>State:</strong> Memento almacena estados previos, mientras que State cambia estados dinámicamente.
            </li>
            <li>
              <strong>Prototype:</strong> Puede usarse para clonar estados en lugar de almacenarlos como Memento.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Clase Memento que almacena el estado
class Memento {
    private String estado;

    public Memento(String estado) {
        this.estado = estado;
    }

    public String getEstado() {
        return estado;
    }
}

// Clase Originator que crea y restaura Mementos
class EditorTexto {
    private String contenido;

    public void escribir(String texto) {
        this.contenido = texto;
    }

    public Memento guardar() {
        return new Memento(contenido);
    }

    public void restaurar(Memento memento) {
        this.contenido = memento.getEstado();
    }

    public void mostrar() {
        System.out.println("Contenido actual: " + contenido);
    }
}

// Clase Caretaker que gestiona los Mementos
class Historial {
    private List<Memento> mementos = new ArrayList<>();

    public void agregarMemento(Memento m) {
        mementos.add(m);
    }

    public Memento obtenerMemento(int indice) {
        return mementos.get(indice);
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        EditorTexto editor = new EditorTexto();
        Historial historial = new Historial();

        editor.escribir("Primera versión");
        historial.agregarMemento(editor.guardar());

        editor.escribir("Segunda versión");
        historial.agregarMemento(editor.guardar());

        editor.mostrar();
        
        // Restaurando al estado anterior
        editor.restaurar(historial.obtenerMemento(0));
        editor.mostrar();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Memento;
