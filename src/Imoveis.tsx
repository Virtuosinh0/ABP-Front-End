import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imoveisData from './DBImoveis.json';

const Imoveis = () => {
  // A variável-state abaixo armazenará os dados dos imóveis para listagem na tela
  const [items] = useState(imoveisData);

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Imóveis</h2>

      <nav>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="text-xl">
              <Link
                to={`/imovel/${item.id}`}
                className="hover:underlined hover:text-blue-700"
              >
                {item.address}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Imoveis;
