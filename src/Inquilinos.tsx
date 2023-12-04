import React from 'react';
import { Link } from 'react-router-dom';
import contasReceberData from './DBContasReceber.json';
import inquilinosData from './DBInquilinos.json';

const Inquilinos: React.FC = () => {
  // Obter o mês e ano atual para verificação do pagamento
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // +1 porque os meses iniciam do zero
  const currentYear = today.getFullYear();

  // Filtrar os inquilinos ativos
  const inquilinosAtivos = inquilinosData.filter(
    (inquilino) => inquilino.status === 'Ativo'
  );

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Inquilinos</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Lista de Inquilinos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Usando os inquilinos ativos filtrados */}
          {inquilinosAtivos.map((inquilino) => {
            // Verificar se existe um pagamento do mês atual para o inquilino atual
            const pagamentoAtual = contasReceberData.find(
              (conta) =>
                conta.inquilinoId === inquilino.id &&
                new Date(conta.detalhesPagamento.dataPagamento).getMonth() +
                  1 ===
                  currentMonth &&
                new Date(
                  conta.detalhesPagamento.dataPagamento
                ).getFullYear() === currentYear
            );

            return (
              <div
                key={inquilino.id}
                className="bg-white p-4 rounded-md shadow-md"
              >
                {/* Renderizar os detalhes do inquilino */}
                <Link
                  to={`/inquilino/${inquilino.id}`}
                  className="text-blue-700 hover:underline"
                >
                  <p className="text-lg font-semibold">
                    Nome: {inquilino.nome}
                  </p>
                </Link>
                <p>Endereço: {inquilino.endereco}</p>
                {/* Mostrar o status do pagamento */}
                <p>
                  Status do pagamento: {pagamentoAtual ? 'Pago' : 'Pendente'}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mb-5">
        {/* Altere o link conforme necessário */}
        <Link
          to="/gerenciar-inquilinos"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Gerenciar Inquilinos
        </Link>
      </div>
    </div>
  );
};

export default Inquilinos;
