import React from 'react';

interface InquilinoProps {
  user: string;
}

const Inquilino: React.FC<InquilinoProps> = ({ user }) => {
  return (
    <div className="container">
      <h2>{`Bem-vindo, ${user}!`}</h2>
      {/* Adicione aqui os componentes e informações que deseja exibir para o inquilino */}
    </div>
  );
};

export default Inquilino;