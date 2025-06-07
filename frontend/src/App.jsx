import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      className="App"
      style={{
        textAlign: 'center',
        padding: '3rem',
        fontFamily: 'Helvetica, sans-serif',
        background: 'linear-gradient(to bottom right, #a1c4fd, #c2e9fb)',
        color: '#333',
        minHeight: '100vh'
      }}
    >
      <h1 style={{ fontSize: '2.8rem', color: '#2c3e50' }}>
        ☁️ Final Project: Cloud Computing ☁️
      </h1>

      <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
        Built by <strong>Aiko</strong>, <strong>Zetta</strong>, and <strong>Tenka</strong> — the unstoppable trio 💪
      </p>

      <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
        Juggling containers, APIs, and the occasional VM crash — but still making it sparkle ✨
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#f39c12',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        ⚡ Clicked ({clicks}) times!
      </button>

      <p style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
        Backend says: <strong>Hello from FastAPI!</strong>
      </p>
    </div>
  );
}

export default App;
