import React from 'react';

interface LocadorProps {
  user: string;
}

const Locador: React.FC<LocadorProps> = ({ user }) => {
  return (
    <div>
      <header className="bg-indigo-700 p-4">
        <h1 className="text-3xl font-semibold text-white">{`Dashboard do locador ${user}`}</h1>
      </header>
      <main className="p-6">
        <div className="mb-8">
          <p className="text-xl text-gray-800 rounded-md p-4 bg-white shadow-md">
            Bem-vindo, {user}! Aqui você pode acessar informações relacionadas à
            gestão de suas propriedades.
          </p>
          <img
            src="https://concurseirofeliz.weebly.com/uploads/1/0/0/7/100768724/bemvindo_orig.png"
            alt="Imagem de boas-vindas"
            className="mt-4 rounded-md shadow-md w-full"
          />
        </div>
        <section className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">
            Informações do Sexto Andar
          </h2>
          <p className="text-gray-800">
            No Sexto Andar, oferecemos a você acesso fácil a informações
            detalhadas sobre suas propriedades, incluindo projeções de receita
            mensal, relatórios de vistoria e muito mais.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Locador;
