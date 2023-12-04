import React from 'react';
import { Link } from 'react-router-dom';
import imoveisData from './DBImoveis.json';

interface ImoveisProps {
  user: string;
}

const Imoveis: React.FC<ImoveisProps> = ({ user }) => {
  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Imóveis</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Propriedades Sob Sua Gestão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imoveisData.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
              <Link
                to={`/imovel/${item.id}`}
                className="text-blue-700 hover:underline"
              >
                <img
                  src={item.imagem}
                  alt={item.address}
                  className="rounded-md mb-2"
                />
                <p className="text-lg font-semibold">Propriedade {item.id}</p>
              </Link>

              <p>{item.address}</p>
              <p>Tipo: {item.type}</p>
              <p>Tamanho: {item.size}m²</p>
              <p>Preço: R$:{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-5">
        <Link
          to="/crud-imoveis"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Gerenciar Imóveis
        </Link>
      </div>
    </div>
  );
};

export default Imoveis;
