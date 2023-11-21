import React, { useState } from 'react';
import './style.css';

const Chat = () => {
  const [mensagem, setMensagem] = useState('');
  const [mensagensDoChat, setMensagensDoChat] = useState([]);

  const enviarMensagem = (event) => {
    event.preventDefault();
    if (mensagem.trim() !== "") {
      setMensagensDoChat([...mensagensDoChat, mensagem]);
      setMensagem('');
    }
  }

  return (
    <div>
      {mensagensDoChat.map((msg, index) => (
        <div key={index} className="mensagem mensagem-do-usuario">
          <p><strong>{msg}</strong></p>
        </div>
      ))}
      <form onSubmit={enviarMensagem}>
        <input
          type="text"
          id="entrada-do-usuario"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button type="submit" id="enviar-mensagem">Enviar</button>
      </form>
    </div>
  );
}

export default Chat;
