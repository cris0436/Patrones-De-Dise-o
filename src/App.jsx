import { useState } from 'react'

import Layout from './views/Layout'
import { Route,BrowserRouter as Router ,Routes,Navigate} from 'react-router-dom';
function App() {
  
  return (
    <>
  <div className="d-flex flex-column min-vh-100">
  <div className="main-content">
    <Router>
    <Routes>
        <Route path="/" element={<Layout com="Home" />} />
        <Route path="/patrones" element={<Layout com="Patterns" />} />
        {/* Rutas para patrones creacionales */}
        <Route path="/patrones/estructurales" element={<Layout com="Estructurales" />} />
        <Route path="/patrones/creacionales" element={<Layout com="Creacionales" />} />
        <Route path="/patrones/singleton" element={<Layout com="Singleton" />} />
        <Route path="/patrones/builder" element={<Layout com="Builder" />} />
        <Route path="/patrones/factory-method" element={<Layout com="FactoryMethod" />} />
        <Route path="/patrones/abstract-factory" element={<Layout com="AbstractFactory" />} />
        <Route path="/patrones/prototype" element={<Layout com="Prototype" />} />

        {/* Rutas para patrones estructurales */}
        <Route path="/patrones/facade" element={<Layout com="Facade" />} />
        <Route path="/patrones/proxy" element={<Layout com="Proxy" />} />
        <Route path="/patrones/decorator" element={<Layout com="Decorator" />} />
        <Route path="/patrones/adapter" element={<Layout com="Adapter" />} />
        <Route path="/patrones/bridge" element={<Layout com="Bridge" />} />
        <Route path="/patrones/composite" element={<Layout com="Composite" />} />
        <Route path="/patrones/flyweight" element={<Layout com="Flyweight" />} />

        {/* Rutas para patrones de comportamiento */}
        <Route path="/patrones/comportamentales" element={<Layout com="Comportamentales" />}/>
        <Route path="/patrones/chain-of-responsibility" element={<Layout com="ChainOfResponsibility" />} />
        <Route path="/patrones/command" element={<Layout com="Command" />} />
        <Route path="/patrones/interpreter" element={<Layout com="Interpreter" />} />
        <Route path="/patrones/iterator" element={<Layout com="Iterator" />} />
        <Route path="/patrones/mediator" element={<Layout com="Mediator" />} />
        <Route path="/patrones/memento" element={<Layout com="Memento" />} />
        <Route path="/patrones/observer" element={<Layout com="Observer" />} />
        <Route path="/patrones/state" element={<Layout com="State" />} />
        <Route path="/patrones/strategy" element={<Layout com="Strategy" />} />
        <Route path="/patrones/template-method" element={<Layout com="TemplateMethod" />} />
        <Route path="/patrones/visitor" element={<Layout com="Visitor" />} />
      </Routes>

    </Router>
    </div>
    </div>
    </>
  )
}

export default App
