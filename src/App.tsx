import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import LoginForm from './LoginForm';
import Inquilino from './Inquilino';
import Locador from './Locador';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/inquilino" element={<Inquilino />} />
        <Route path="/locador" element={<Locador />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
