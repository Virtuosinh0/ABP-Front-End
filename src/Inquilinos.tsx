import React from 'react';

interface InquilinosProps {
  user: string;
}

const Inquilinos: React.FC<InquilinoProps> = ({ user }) => {
  return (
    <div className="container">
      <h2>{`Bem-vindo, ${user}!`}</h2>
      {/* Adicione aqui os componentes e informações que deseja exibir para os inquilinos */}
    </div>
  );
};

export default Inquilinos;
