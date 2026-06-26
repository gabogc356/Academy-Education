import React, { useState } from 'react';
import { openaiService } from '../../../shared/services/openai.service';
import './ChatGPTModule.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const ChatGPTModule: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: '¡Hola! Soy tu asistente IA. ¿En qué puedo ayudarte?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await openaiService.chat(
        messages.map((m) => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
      );

      const aiMessage: Message = {
        id: Date.now().toString(),
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="module-container chatgpt-module">
      <h1>💬 ChatGPT</h1>
      <p>Asistente IA multidisciplinario</p>

      <div className="chat-container">
        <div className="messages-list">
          {messages.map((msg) => (
            <div key={msg.id} className={`message message-${msg.sender}`}>
              <div className="message-avatar">{msg.sender === 'user' ? '👤' : '🤖'}</div>
              <div className="message-content">
                <p>{msg.text}</p>
                <span className="timestamp">{msg.timestamp.toLocaleTimeString()}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="message message-ai">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <p>⏳ Escribiendo...</p>
              </div>
            </div>
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Escribe tu pregunta..."
            disabled={loading}
          />
          <button onClick={sendMessage} disabled={loading}>
            📤 Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
