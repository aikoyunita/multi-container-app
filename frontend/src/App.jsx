import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [containers, setContainers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch running Docker containers from backend
    fetch('http://backend:8000/containers')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setContainers(data))
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('⚠️ Could not fetch container list');
      });
  }, []);

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '3rem',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
        📦 Multi-Container App Dashboard
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
        Built with ❤️ by <strong>Aiko</strong>, <strong>Zetta</strong>, and <strong>Tenka</strong> for their Cloud Computing project ☁️
      </p>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🧊 Active Containers</h2>

      {error ? (
        <p style={{ color: '#ff6b6b' }}>{error}</p>
      ) : containers.length === 0 ? (
        <p style={{ color: '#888' }}>Loading containers...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '600px' }}>
          {containers.map((c, i) => (
            <li key={i} style={{
              backgroundColor: '#2c2c2c',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              textAlign: 'left'
            }}>
              <strong>📦 {c.name}</strong><br />
              <span style={{ color: '#aaa' }}>🔗 Image: {c.image.join(', ')}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
