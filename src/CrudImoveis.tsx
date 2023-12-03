import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imoveisData from './DBImoveis.json';

interface Imovel {
  id: number;
  imagem: string;
  address: string;
  type: string;
  size: string;
  price: string;
}

const CrudImoveis: React.FC = () => {
  const [items, setItems] = useState<Imovel[]>(imoveisData);
  const [newItem, setNewItem] = useState<Imovel>({
    id: 0,
    imagem: '',
    address: '',
    type: '',
    size: '',
    price: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Dados enviados');
  };

  const handleAddItem = () => {
    if (!newItem.address || !newItem.type || !newItem.size || !newItem.price) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    alert('Propriedade criada com sucesso');

    const existingIds = items.map((item) => item.id);
    const missingIds = Array.from(
      { length: items.length + 1 },
      (_, index) => index + 1
    ).filter((id) => !existingIds.includes(id));

    const updatedItems = [
      ...items,
      {
        ...newItem,
        id: missingIds[0],
        imagem: newItem.imagem || 'http://placekitten.com/500/400',
      },
    ];

    setItems(updatedItems);
    setNewItem({
      id: 0,
      imagem: '',
      address: '',
      type: '',
      size: '',
      price: '',
    });
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log('Items updated:', items);
  }, [items]);

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Imóveis</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Adicionar Imóvel
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={newItem.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="type">Tipo:</label>
            <input
              type="text"
              id="type"
              name="type"
              value={newItem.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="size">Tamanho:</label>
            <input
              type="text"
              id="size"
              name="size"
              value={newItem.size}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="price">Preço:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={newItem.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="imagem">URL da Imagem(opcional):</label>
            <input
              type="text"
              id="imagem"
              name="imagem"
              value={newItem.imagem}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              onClick={handleAddItem}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Adicionar
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Propriedades Sob Sua Gestão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={item.imagem}
                alt={item.address}
                className="rounded-md mb-2"
              />
              <p className="text-lg font-semibold">Propriedade {item.id}</p>
              <p>{item.address}</p>
              <p>Tipo: {item.type}</p>
              <p>Tamanho: {item.size}m²</p>
              <p>Preço: R$:{item.price}</p>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
        <Link to="/imoveis" className="ml-4 text-blue-700 hover:underline">
          Ir à tela de imóveis
        </Link>
      </div>
    </div>
  );
};

export default CrudImoveis;
