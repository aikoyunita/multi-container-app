import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <div>
      <h1>Vite + React + FastAPI</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
}

export default App;
