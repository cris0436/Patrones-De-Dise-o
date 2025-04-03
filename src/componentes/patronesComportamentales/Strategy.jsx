import React from 'react';
import strategyImage from '../../assets/strategy.png';
import strategyImageLogo from '../../assets/strategy-logo.png';

const Strategy = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Patrón de Diseño Strategy</h1>
      <p className="lead text-center">
        Un patrón de diseño comportamental que permite definir una familia de algoritmos, encapsularlos y hacerlos intercambiables en tiempo de ejecución.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2>¿Qué es el Strategy?</h2>
          <p>
            El <strong>patrón Strategy</strong> es un patrón de diseño comportamental que permite seleccionar dinámicamente el algoritmo que se utilizará en una operación.
            En lugar de definir múltiples condicionales para seleccionar un comportamiento, Strategy separa los algoritmos en clases independientes.
          </p>
          <h3>¿Qué problema resuelve?</h3>
          <p>
            En sistemas donde existen múltiples algoritmos para realizar una tarea, el código tiende a llenarse de estructuras condicionales para seleccionar el método correcto.
            Esto hace que el código sea difícil de mantener y modificar. **Strategy** soluciona este problema encapsulando cada algoritmo en una clase diferente
            y permitiendo intercambiarlos en tiempo de ejecución sin modificar el código del cliente.
          </p>
          <h3>Casos de uso</h3>
          <ul>
            <li>Selección de métodos de pago en una tienda en línea (tarjeta de crédito, PayPal, criptomonedas).</li>
            <li>Compresión de archivos con diferentes algoritmos (ZIP, RAR, 7z).</li>
            <li>Ordenamiento de datos usando diferentes estrategias (quicksort, mergesort, bubblesort).</li>
            <li>Generación de rutas en aplicaciones de mapas según el tipo de transporte.</li>
            <li>Validación de datos con diferentes estrategias de autenticación.</li>
            <li>Renderizado de gráficos usando distintos motores gráficos.</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={strategyImage} alt="Patrón Strategy" className="img-fluid" />
          <img src={strategyImageLogo} alt="Logo Strategy" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Ventajas del Strategy</h2>
          <ul>
            <li>Permite cambiar los algoritmos en tiempo de ejecución sin modificar el código cliente.</li>
            <li>Favorece el principio de **abierto/cerrado** (OCP) al agregar nuevas estrategias sin modificar las existentes.</li>
            <li>Elimina condicionales complejos en la lógica del cliente.</li>
            <li>Fomenta la reutilización de código al encapsular algoritmos en clases independientes.</li>
            <li>Facilita la prueba y depuración de cada estrategia de forma aislada.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Desventajas del Strategy</h2>
          <ul>
            <li>Puede aumentar la complejidad del sistema si se tienen demasiadas estrategias.</li>
            <li>Requiere crear múltiples clases e interfaces, lo que puede ser excesivo en casos simples.</li>
            <li>El cliente debe conocer las estrategias disponibles para seleccionarlas adecuadamente.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Patrones relacionados</h2>
          <ul>
            <li>**State**: Similar a Strategy, pero en lugar de representar algoritmos, maneja estados de un objeto.</li>
            <li>**Template Method**: Define una estructura común y permite a las subclases modificar partes específicas.</li>
            <li>**Factory Method**: Puede utilizarse para instanciar estrategias de forma flexible.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-12">
        <h2>Ejemplo en Java</h2>
        <pre className="bg-light p-3">
{`// Interfaz de la estrategia
interface EstrategiaPago {
    void pagar(double cantidad);
}

// Implementación concreta - Pago con tarjeta de crédito
class PagoTarjetaCredito implements EstrategiaPago {
    public void pagar(double cantidad) {
        System.out.println("Pago de " + cantidad + " realizado con tarjeta de crédito.");
    }
}

// Implementación concreta - Pago con PayPal
class PagoPayPal implements EstrategiaPago {
    public void pagar(double cantidad) {
        System.out.println("Pago de " + cantidad + " realizado con PayPal.");
    }
}

// Implementación concreta - Pago con criptomonedas
class PagoCripto implements EstrategiaPago {
    public void pagar(double cantidad) {
        System.out.println("Pago de " + cantidad + " realizado con criptomonedas.");
    }
}

// Contexto que utiliza una estrategia de pago
class ProcesadorPago {
    private EstrategiaPago estrategia;

    public void setEstrategia(EstrategiaPago estrategia) {
        this.estrategia = estrategia;
    }

    public void ejecutarPago(double cantidad) {
        if (estrategia != null) {
            estrategia.pagar(cantidad);
        } else {
            System.out.println("No se ha seleccionado una estrategia de pago.");
        }
    }
}

// Cliente
public class Cliente {
    public static void main(String[] args) {
        ProcesadorPago procesador = new ProcesadorPago();

        // Usando tarjeta de crédito
        procesador.setEstrategia(new PagoTarjetaCredito());
        procesador.ejecutarPago(100.50);

        // Usando PayPal
        procesador.setEstrategia(new PagoPayPal());
        procesador.ejecutarPago(200.75);

        // Usando criptomonedas
        procesador.setEstrategia(new PagoCripto());
        procesador.ejecutarPago(300.25);
    }
}`}
        </pre>
      </div>
    </div>
  );
};

export default Strategy;
