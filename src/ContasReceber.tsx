import React from 'react';
import { Link } from 'react-router-dom';
import contasReceberData from './DBContasReceber.json';
import imoveisData from './DBImoveis.json';

interface ContasReceberProps {
  user: string;
}

const ContasReceber: React.FC<ContasReceberProps> = ({ user }) => {
  // Obter o mês e ano atual para verificação do pagamento
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // +1 porque os meses iniciam do zero
  const currentYear = today.getFullYear();

  // Filtrar os imóveis alugados
  const imoveisAlugados = imoveisData.filter(
    (imovel) => imovel.alugado === 'Y'
  );

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">
        Contas a Receber
      </h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Lista de Contas a Receber
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Usando os imóveis alugados filtrados */}
          {imoveisAlugados.map((imovel) => {
            // Verificar se existe um pagamento do mês atual para o imóvel atual
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
                {/* Renderizar os detalhes do imóvel */}
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

      <div className="mb-5">
        {/* Altere o link conforme necessário */}
        <Link
          to="/gerenciar-contas-receber"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Gerenciar Contas a Receber
        </Link>
      </div>
    </div>
  );
};

export default ContasReceber;
