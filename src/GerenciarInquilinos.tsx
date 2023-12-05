import React, { useState } from 'react';

interface Inquilino {
  id: number;
  nome: string;
  status: string;
  endereco: string;
  idade: number;
}

const GerenciarInquilinos: React.FC = () => {
  const [inquilinos, setInquilinos] = useState<Inquilino[]>([]);
  const [novoInquilino, setNovoInquilino] = useState<Inquilino>({
    id: 0,
    nome: '',
    status: '',
    endereco: '',
    idade: 0,
  });
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNovoInquilino({ ...novoInquilino, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editandoId === null) {
      handleAddInquilino();
    } else {
      handleUpdateInquilino();
    }
  };

  const handleAddInquilino = () => {
    if (
      !novoInquilino.nome ||
      !novoInquilino.status ||
      !novoInquilino.endereco ||
      !novoInquilino.idade
    ) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    alert('Inquilino criado com sucesso');

    const existingIds = inquilinos.map((inquilino) => inquilino.id);
    const missingIds = Array.from(
      { length: inquilinos.length + 1 },
      (_, index) => index + 1
    ).filter((id) => !existingIds.includes(id));

    const updatedInquilinos = [
      ...inquilinos,
      {
        ...novoInquilino,
        id: missingIds[0],
      },
    ];

    setInquilinos(updatedInquilinos);
    setNovoInquilino({
      id: 0,
      nome: '',
      status: '',
      endereco: '',
      idade: 0,
    });
  };

  const handleUpdateInquilino = () => {
    if (
      !novoInquilino.nome ||
      !novoInquilino.status ||
      !novoInquilino.endereco ||
      !novoInquilino.idade
    ) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    alert('Inquilino atualizado com sucesso');

    const updatedInquilinos = inquilinos.map((inquilino) =>
      inquilino.id === editandoId ? novoInquilino : inquilino
    );

    setInquilinos(updatedInquilinos);
    setNovoInquilino({
      id: 0,
      nome: '',
      status: '',
      endereco: '',
      idade: 0,
    });
    setEditandoId(null);
  };

  const handleEditInquilino = (inquilino: Inquilino) => {
    setNovoInquilino(inquilino);
    setEditandoId(inquilino.id);
  };

  const handleDeleteInquilino = (id: number) => {
    setInquilinos(inquilinos.filter((inquilino) => inquilino.id !== id));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2
        style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}
      >
        Gerenciar Inquilinos
      </h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '1rem' }}>
          ID:
          <input
            type="number"
            name="id"
            value={novoInquilino.id}
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
            value={novoInquilino.nome}
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
            value={novoInquilino.status}
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
            value={novoInquilino.endereco}
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
            value={novoInquilino.idade}
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
          {editandoId === null ? 'Adicionar Inquilino' : 'Atualizar Inquilino'}
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
          Lista de Inquilinos
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {inquilinos.map((inquilino) => (
            <div
              key={inquilino.id}
              style={{
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                ID: {inquilino.id}
              </p>
              <p>Nome: {inquilino.nome}</p>
              <p>Status: {inquilino.status}</p>
              <p>Endereço: {inquilino.endereco}</p>
              <p>Idade: {inquilino.idade}</p>
              <button
                onClick={() => handleEditInquilino(inquilino)}
                style={{ marginRight: '1rem' }}
              >
                Editar
              </button>
              <button onClick={() => handleDeleteInquilino(inquilino.id)}>
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GerenciarInquilinos;
