import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userType, setUserType] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (userType === 'inquilino') {
      navigate('/inquilino');
    } else if (userType === 'locador') {
      navigate('/locador');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-8 text-gray-700">
          Acessar o sistema
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm text-gray-600"
            >
              Usuário
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-5 flex items-center justify-center space-x-4">
            <input
              type="radio"
              id="inquilino"
              name="userType"
              value="inquilino"
              checked={userType === 'inquilino'}
              onChange={() => setUserType('inquilino')}
            />
            <label htmlFor="inquilino">Inquilino</label>
            <input
              type="radio"
              id="locador"
              name="userType"
              value="locador"
              checked={userType === 'locador'}
              onChange={() => setUserType('locador')}
            />
            <label htmlFor="locador">Locador</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
