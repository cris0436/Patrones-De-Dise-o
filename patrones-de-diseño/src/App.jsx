import { useState } from 'react'

import Layout from './views/Layout'
import { Singleton } from './componentes/patronesCreacionales';
import { Route,BrowserRouter as Router ,Routes,Navigate} from 'react-router-dom';
function App() {
  
  return (
    <>
                <Router>
      <Routes>
        {/* Rutas para patrones creacionales */}
        <Route path="/estructurales" element={<Layout com="Estructurales" />} />
        <Route path="/creacionales" element={<Layout com="Creacionales" />} />
        <Route path="/singleton" element={<Layout com="Singleton" />} />
        <Route path="/builder" element={<Layout com="Builder" />} />
        <Route path="/factory-method" element={<Layout com="FactoryMethod" />} />
        <Route path="/abstract-factory" element={<Layout com="AbstractFactory" />} />
        <Route path="/prototype" element={<Layout com="Prototype" />} />

        {/* Rutas para patrones estructurales */}
        <Route path="/facade" element={<Layout com="Facade" />} />
        <Route path="/proxy" element={<Layout com="Proxy" />} />
        <Route path="/decorator" element={<Layout com="Decorator" />} />
        <Route path="/adapter" element={<Layout com="Adapter" />} />
        <Route path="/bridge" element={<Layout com="Bridge" />} />
        <Route path="/composite" element={<Layout com="Composite" />} />
        <Route path="/flyweight" element={<Layout com="Flyweight" />} />
      </Routes>
    </Router>
    

    </>
  )
}

export default App
