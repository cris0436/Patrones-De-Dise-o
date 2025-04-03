import React from 'react';
import templateMethodImage from '../../assets/templateMethod.png';
import templateMethodImageLogo from '../../assets/template-method-logo.png';

const TemplateMethod = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Template Method</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que define la estructura de un algoritmo en una clase base y permite que las subclases personalicen ciertos pasos sin cambiar la estructura general.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Template Method?</h2>
          <p>
            El <strong>patrón Template Method</strong> define la estructura general de un algoritmo en una clase base,  
            delegando los pasos específicos a las subclases sin modificar su flujo principal.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En muchas aplicaciones, existen algoritmos con pasos fijos y otros variables.  
            Si cada clase implementa el algoritmo completo, se genera código duplicado.  
            Template Method permite definir el esqueleto del algoritmo en una superclase y dejar la personalización a las subclases.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Procesamiento de documentos con distintas exportaciones (PDF, CSV, XML).</li>
            <li>Gestión de flujo de vida en frameworks (hooks en React, métodos en Spring).</li>
            <li>Implementación de algoritmos con diferentes estrategias en algunas partes.</li>
            <li>Renderizado de páginas con estructuras similares en distintas vistas.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={templateMethodImage} alt="Patrón Template Method" className="img-fluid" />
          <img src={templateMethodImageLogo} alt="Logo Template Method" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Template Method</h2>
          <ul>
            <li>Evita la duplicación de código al definir una estructura común.</li>
            <li>Facilita la extensión y personalización sin modificar la lógica principal.</li>
            <li>Permite reutilizar código sin afectar la lógica central.</li>
            <li>Favorece el uso de herencia para compartir lógica común.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Template Method</h2>
          <ul>
            <li>Depende de la herencia, lo que puede generar acoplamiento.</li>
            <li>Si hay muchos métodos abstractos, la implementación en subclases puede volverse compleja.</li>
            <li>Es menos flexible que patrones como Strategy, que usa composición en lugar de herencia.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Strategy:</strong> Mientras que Template Method usa herencia para definir pasos en subclases, Strategy usa composición para cambiar algoritmos dinámicamente.
            </li>
            <li>
              <strong>Factory Method:</strong> Se usa dentro de Template Method cuando es necesario delegar la creación de objetos en las subclases.
            </li>
            <li>
              <strong>Observer:</strong> Puede emplearse junto con Template Method cuando se requiere notificar cambios en la ejecución del algoritmo base.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Clase base con el método plantilla
abstract class ProcesadorDocumento {
    // Método plantilla
    public final void procesarDocumento() {
        abrirDocumento();
        leerContenido();
        formatearDocumento();
        guardarDocumento();
    }

    protected abstract void abrirDocumento();
    protected abstract void leerContenido();
    protected abstract void formatearDocumento();
    
    // Método común
    private void guardarDocumento() {
        System.out.println("Guardando documento...");
    }
}

// Subclase para documentos PDF
class ProcesadorPDF extends ProcesadorDocumento {
    protected void abrirDocumento() {
        System.out.println("Abriendo documento PDF...");
    }

    protected void leerContenido() {
        System.out.println("Leyendo contenido del PDF...");
    }

    protected void formatearDocumento() {
        System.out.println("Formateando PDF...");
    }
}

// Subclase para documentos Word
class ProcesadorWord extends ProcesadorDocumento {
    protected void abrirDocumento() {
        System.out.println("Abriendo documento Word...");
    }

    protected void leerContenido() {
        System.out.println("Leyendo contenido del Word...");
    }

    protected void formatearDocumento() {
        System.out.println("Formateando Word...");
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        ProcesadorDocumento pdf = new ProcesadorPDF();
        ProcesadorDocumento word = new ProcesadorWord();

        System.out.println("Procesando PDF:");
        pdf.procesarDocumento();

        System.out.println("\\nProcesando Word:");
        word.procesarDocumento();
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default TemplateMethod;
