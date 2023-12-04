import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe o useLocation do react-router-dom
import contasReceberData from './DBContasReceber.json';
import imoveisData from './DBImoveis.json';

const Inquilino: React.FC<{
  user: string;
  setExibirMenu: (exibir: boolean) => void;
}> = ({ user, setExibirMenu }) => {
  const location = useLocation(); // Use o hook useLocation
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  const imoveisAlugados = imoveisData.filter(
    (imovel) => imovel.alugado === 'Y'
  );

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">
        Pagamentos do Mês
      </h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Todos os pagamentos do mês
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Usando os imóveis alugados filtrados */}
          {imoveisAlugados.map((imovel) => {
            const pagamentoAtual = contasReceberData.find(
              (conta) =>
                conta.propertyId === imovel.id &&
                new Date(conta.detalhesPagamento.dataPagamento).getMonth() +
                  1 ===
                  currentMonth &&
                new Date(
                  conta.detalhesPagamento.dataPagamento
                ).getFullYear() === currentYear
            );

            return (
              <div
                key={imovel.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                <Link
                  to={`/contas/${imovel.id}`}
                  className="text-blue-700 hover:underline"
                >
                  <p className="text-lg font-semibold">
                    Propriedade {imovel.id}
                  </p>
                </Link>
                <p>Endereço: {imovel.address}</p>
                <p>Preço: R$ {imovel.price}</p>
                <p>Status: {pagamentoAtual ? 'Pago' : 'Pendente'}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Inquilino;
