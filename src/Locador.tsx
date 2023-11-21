import React from 'react';

const Locador: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/contas-receber">Contas a receber</a></li>
            <li><a href="/imoveis">Imóveis</a></li>
            <li><a href="/inquilinos">Inquilinos</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Conteúdo da página aqui */}
      </main>
    </div>
  );
};

export default Locador;
