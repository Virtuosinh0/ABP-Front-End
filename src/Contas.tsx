import React from 'react';
import { useParams } from 'react-router-dom';
import contasReceberData from './DBContasReceber.json';

const Contas: React.FC = () => {
  const { id } = useParams();

  // Filtrar pagamentos pelo propertyId e ordenar por data (do mais recente para o mais antigo)
  const pagamentos = contasReceberData
    .filter((conta) => conta.propertyId === parseInt(id))
    .sort((a, b) => {
      const dateA = new Date(a.detalhesPagamento.dataPagamento);
      const dateB = new Date(b.detalhesPagamento.dataPagamento);
      return dateB.getTime() - dateA.getTime();
    });

  console.log(id);
  console.log(pagamentos);
  console.log(contasReceberData);

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">Pagamentos</h2>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">
          Pagamentos do Imóvel {id}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {pagamentos.map((pagamento) => (
            <div
              key={pagamento.id}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <p className="text-lg font-semibold">Pagamento</p>
              <p>Valor Pago: R$ {pagamento.detalhesPagamento.valorPago}</p>
              <p>
                Data do Pagamento: {pagamento.detalhesPagamento.dataPagamento}
              </p>
              {/* Outras informações relevantes */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contas;
