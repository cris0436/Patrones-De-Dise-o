import React from 'react';
import interpreterImage from '../../assets/interpreter.png';
import interpreterImageLogo from '../../assets/interpreter-logo.png';

const Interpreter = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Interpreter</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que proporciona un marco para interpretar expresiones en un lenguaje determinado.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Interpreter?</h2>
          <p>
            El <strong>patrón Interpreter</strong> se utiliza para definir una gramática para un lenguaje y proporcionar un mecanismo para interpretarlo.  
            Se emplea comúnmente en compiladores, motores de reglas y herramientas de procesamiento de expresiones.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En aplicaciones donde se requiere procesar comandos o expresiones basadas en una gramática,  
            el patrón Interpreter ayuda a estructurar el código de forma clara y modular, permitiendo agregar nuevas reglas sin afectar el resto del sistema.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Lenguajes de consulta como SQL.</li>
            <li>Expresiones regulares.</li>
            <li>Compiladores e intérpretes de lenguajes.</li>
            <li>Procesadores de comandos o macros.</li>
            <li>Motor de reglas en sistemas de inteligencia artificial.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={interpreterImage} alt="Patrón Interpreter" className="img-fluid" />
          <img src={interpreterImageLogo} alt="Logo Interpreter" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Interpreter</h2>
          <ul>
            <li>Facilita la implementación de lenguajes personalizados.</li>
            <li>Permite extender la gramática sin afectar el código existente.</li>
            <li>Buena integración con otros patrones de diseño como Composite y Visitor.</li>
            <li>Útil para evaluaciones de expresiones matemáticas o lógicas.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Interpreter</h2>
          <ul>
            <li>No es eficiente para gramáticas complejas o de alto rendimiento.</li>
            <li>El código puede volverse difícil de mantener a medida que crece la gramática.</li>
            <li>Poco usado en sistemas a gran escala debido a su complejidad.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>
              <strong>Composite:</strong> Se usa junto con Interpreter para representar expresiones jerárquicas.
            </li>
            <li>
              <strong>Visitor:</strong> Permite agregar nuevas operaciones a la gramática sin modificar sus clases.
            </li>
            <li>
              <strong>Chain of Responsibility:</strong> Puede usarse para procesar reglas de gramática de manera encadenada.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz para las expresiones
interface Expresion {
    int interpretar();
}

// Expresión para números
class Numero implements Expresion {
    private int valor;

    public Numero(int valor) {
        this.valor = valor;
    }

    public int interpretar() {
        return valor;
    }
}

// Expresión para suma
class Suma implements Expresion {
    private Expresion izquierda;
    private Expresion derecha;

    public Suma(Expresion izquierda, Expresion derecha) {
        this.izquierda = izquierda;
        this.derecha = derecha;
    }

    public int interpretar() {
        return izquierda.interpretar() + derecha.interpretar();
    }
}

// Expresión para resta
class Resta implements Expresion {
    private Expresion izquierda;
    private Expresion derecha;

    public Resta(Expresion izquierda, Expresion derecha) {
        this.izquierda = izquierda;
        this.derecha = derecha;
    }

    public int interpretar() {
        return izquierda.interpretar() - derecha.interpretar();
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        Expresion expresion = new Suma(new Numero(5), new Resta(new Numero(10), new Numero(3)));
        System.out.println("Resultado: " + expresion.interpretar()); // Output: 5 + (10 - 3) = 12
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Interpreter;
