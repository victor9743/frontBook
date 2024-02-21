import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./contexts/UserContext";
import App from './App';
import { CadastroUsuario } from './views/CadastroUsuario';
import { Livros } from './views/Livros';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/usuario/novo' element={<CadastroUsuario />} />
      </Routes>
    </UserProvider>
      <Routes>
        <Route path='/livros' element={<Livros />} />
      </Routes>
  </BrowserRouter>
);
