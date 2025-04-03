import React from "react";
import { Facade, Proxy, Decorator, Adapter, Bridge, Composite, Flyweight ,Estructurales} from "../componentes/patronesEstructurales";
import { Singleton, Builder, FactoryMethod, AbstractFactory, Prototype ,Creacionales} from "../componentes/patronesCreacionales";
 import {Comportamentales,ChainOfResponsibility,Command,Interpreter,Iterator,Mediator,Memento,Observer,State,Strategy,TemplateMethod,Visitor} from "../componentes/patronesComportamentales"

import BarraNavegacion from "../componentes/barraNavegacion";
import Footer from "../componentes/Footer";
import Home from "./Home";
import Patterns from "./Patrones";
const Layout = ({ com }) => {
  // Mapeo de nombres a componentes (quitando variables sin definir)
  const componentes = {
    Home,Patterns,Comportamentales,Creacionales,Estructurales,Facade, Proxy, Decorator, Adapter, Bridge, Composite, Flyweight,
    Singleton, Builder, FactoryMethod, AbstractFactory, Prototype,ChainOfResponsibility,Command,Interpreter,Iterator,Mediator,Memento,Observer,State,Strategy,TemplateMethod,Visitor
  };

  // Verificar si el `com` recibido es válido
  const ComponenteSeleccionado = componentes[com] 
    ? componentes[com] 
    : () => <p className="text-center mt-3">⚠️ Selecciona un patrón válido</p>;

  return (
    <div>
      <div className="container mt-4">
        <BarraNavegacion/>
        <ComponenteSeleccionado /> {/* Renderiza el componente dinámicamente */}
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;

