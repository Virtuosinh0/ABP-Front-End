import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Locador from './Locador';
import Inquilinos from './Inquilinos';
import Imoveis from './Imoveis';
import ContasReceber from './ContasReceber';
import RootLayout from './RootLayout';
import LoginForm from './LoginForm'; // Presume-se que seja a página inicial de login

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<LoginForm />} />
        
        {/* Rota para a página do Locador com layout específico */}
        <Route path="/locador/*" element={<RootLayout><Locador /></RootLayout>} />

        {/* Rota para a página de Inquilinos com layout específico */}
        <Route path="/inquilinos/*" element={<RootLayout><Inquilinos /></RootLayout>} />
        
        {/* Rota para a página de Imóveis com layout específico */}
        <Route path="/imoveis/*" element={<RootLayout><Imoveis /></RootLayout>} />
        
        {/* Rota para a página de Contas a Receber com layout específico */}
        <Route path="/contas-receber/*" element={<RootLayout><ContasReceber /></RootLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
