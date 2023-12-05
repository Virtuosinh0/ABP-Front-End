import React, { useState } from 'react';

interface Conta {
  id: number;
  endereco: string;
  prize: string;
  status: string;
}

const GerenciarContas: React.FC = () => {
  const [Contas, setContas] = useState<Conta[]>([]);
  const [novaConta, setnovaConta] = useState<Conta>({
    id: 0,
    status: '',
    endereco: '',
    prize: '',
  });
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setnovaConta({ ...novaConta, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editandoId === null) {
      handleAddConta();
    } else {
      handleUpdateConta();
    }
  };

  const handleAddConta = () => {
    if (!novaConta.status || !novaConta.endereco || !novaConta.prize) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    alert('Conta criada com sucesso');

    const existingIds = Contas.map((Conta) => Conta.id);
    const missingIds = Array.from(
      { length: Contas.length + 1 },
      (_, index) => index + 1
    ).filter((id) => !existingIds.includes(id));

    const updatedContas = [
      ...Contas,
      {
        ...novaConta,
        id: missingIds[0],
      },
    ];

    setContas(updatedContas);
    setnovaConta({
      id: 0,
      status: '',
      endereco: '',
      prize: '',
    });
  };

  const handleUpdateConta = () => {
    if (!novaConta.prize || !novaConta.status || !novaConta.endereco) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    alert('Conta atualizado com sucesso');

    const updatedContas = Contas.map((Conta) =>
      Conta.id === editandoId ? novaConta : Conta
    );

    setContas(updatedContas);
    setnovaConta({
      id: 0,
      status: '',
      endereco: '',
      prize: '',
    });
    setEditandoId(null);
  };

  const handleEditConta = (Conta: Conta) => {
    setnovaConta(Conta);
    setEditandoId(Conta.id);
  };

  const handleDeleteConta = (id: number) => {
    setContas(Contas.filter((Conta) => Conta.id !== id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2
        style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}
      >
        Gerenciar Contas
      </h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          ID:
          <input
            type="number"
            name="id"
            value={novaConta.id}
            onChange={handleInputChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Nome:
          <input
            type="text"
            name="nome"
            value={novaConta.nome}
            onChange={handleInputChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Status:
          <input
            type="text"
            name="status"
            value={novaConta.status}
            onChange={handleInputChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={novaConta.endereco}
            onChange={handleInputChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          Idade:
          <input
            type="number"
            name="idade"
            value={novaConta.idade}
            onChange={handleInputChange}
            style={{
              display: 'block',
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          {editandoId === null ? 'Adicionar Conta' : 'Atualizar Contas'}
        </button>
      </form>
      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Lista de Contas a Receber
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {Contas.map((Conta) => (
            <div
              key={Conta.id}
              style={{
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                ID: {Conta.id}
              </p>
              <p>Status: {Conta.status}</p>
              <p>Endereço: {Conta.endereco}</p>
              <p>Idade: {Conta.prize}</p>
              <button
                onClick={() => handleEditConta(Conta)}
                style={{ marginRight: '1rem' }}
              >
                Editar
              </button>
              <button onClick={() => handleDeleteConta(Contas.id)}>
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GerenciarContas;
