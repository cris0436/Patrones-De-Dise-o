import React from "react";
import { Facade, Proxy, Decorator, Adapter, Bridge, Composite, Flyweight, Estructurales } from "../componentes/patronesEstructurales";
import { Singleton, Builder, FactoryMethod, AbstractFactory, Prototype, Creacionales } from "../componentes/patronesCreacionales";
import { Comportamentales, ChainOfResponsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, TemplateMethod, Visitor } from "../componentes/patronesComportamentales";

import BarraNavegacion from "../componentes/BarraNavegacion";
import Footer from "../componentes/Footer";
import Home from "./Home";
import Patterns from "./Patrones";

const Layout = ({ com }) => {
  const componentes = {
    Home, Patterns, Comportamentales, Creacionales, Estructurales, Facade, Proxy, Decorator, Adapter, Bridge, Composite, Flyweight,
    Singleton, Builder, FactoryMethod, AbstractFactory, Prototype, ChainOfResponsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, TemplateMethod, Visitor
  };

  const ComponenteSeleccionado = componentes[com] 
    ? componentes[com] 
    : () => <p className="text-center mt-3">⚠️ Selecciona un patrón válido</p>;

  return (
    <div className="d-flex flex-column min-vh-100">
      <BarraNavegacion />
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center mt-3">
        <ComponenteSeleccionado />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

