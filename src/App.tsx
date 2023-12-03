import React, { useState, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Locador from './Locador';
import Inquilinos from './Inquilinos';
import Imoveis from './Imoveis';
import ContasReceber from './ContasReceber';
import RootLayout from './RootLayout';
import LoginForm from './LoginForm';
import CrudImoveis from './CrudImoveis';

const App: React.FC = () => {
  const [user, setUser] = useState<string>('');

  const setLoggedInUser = (username: string) => {
    setUser(username);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginForm setLoggedInUser={setLoggedInUser} />}
        />

        <Route
          path="/locador/*"
          element={
            <RootLayout>
              <Locador user={user} />
            </RootLayout>
          }
        />

        <Route
          path="/inquilinos/*"
          element={
            <RootLayout>
              <Inquilinos user={user} />
            </RootLayout>
          }
        />

        <Route
          path="/imoveis/*"
          element={
            <RootLayout>
              <Imoveis user={user} />
            </RootLayout>
          }
        />

        <Route
          path="/contas-receber/*"
          element={
            <RootLayout>
              <ContasReceber user={user} />
            </RootLayout>
          }
        />

        <Route
          path="/crud-imoveis/*"
          element={
            <RootLayout>
              <CrudImoveis />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
