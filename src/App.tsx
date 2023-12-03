import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Locador from './Locador';
import Inquilinos from './Inquilinos';
import Imoveis from './Imoveis';
import ContasReceber from './ContasReceber';
import RootLayout from './RootLayout';
import LoginForm from './LoginForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<LoginForm />} />

        {/* Rota para a página do Locador com layout específico */}
        <Route
          path="/Locador/*"
          element={
            <RootLayout>
              <Locador />
            </RootLayout>
          }
        />

        {/* Rota para a página de Inquilinos com layout específico */}
        <Route
          path="/Inquilinos/*"
          element={
            <RootLayout>
              <Inquilinos />
            </RootLayout>
          }
        />

        {/* Rota para a página de Imóveis com layout específico */}
        <Route
          path="/Imoveis/*"
          element={
            <RootLayout>
              <Imoveis />
            </RootLayout>
          }
        />

        {/* Rota para a página de Contas a Receber com layout específico */}
        <Route
          path="/Contas-Receber/*"
          element={
            <RootLayout>
              <ContasReceber />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
