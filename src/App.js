
import './App.css';
import Contacto from './components/Contacto';
import Listado from './components/Listado';
import Header from './components/Header';
import Login from './components/Login';
import { ThronesProvider } from './context/ThronesProvider';

import {Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      
        <ThronesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/listado" element={<Listado />}/>
            <Route path="/contacto" element={<Contacto />}/>
          </Routes>
        </ThronesProvider>
      
      
      
    </div>
  );
}

export default App;
