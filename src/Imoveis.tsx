import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imoveisData from './DBImoveis.json';

const Imoveis = () => {
  // A variável-state abaixo armazenará os dados dos imóveis para listagem na tela
  const [items] = useState(imoveisData);

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Imóveis</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Propriedades Sob Sua Gestão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={item.imagem}
                alt={item.nome}
                className="rounded-md mb-2"
              />
              <p className="text-lg font-semibold">
                Propriedade {item.id}
              </p>
              <Link
                to={`/imovel/${item.id}`}
                className="text-blue-700 hover:underline"
              >
                {item.address}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Imoveis;
