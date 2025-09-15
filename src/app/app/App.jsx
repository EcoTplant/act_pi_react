import React from 'react';
import './App.css';

export default function App() {
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/"; // Redirige a la página principal
    }
  };

  return (
    <div className="app">
      <main className="main-content">
        <section className="hero-banner">
          <div className="hero-content">
            <h1>Tu salud es nuestra prioridad</h1>
            <p>Encuentra los mejores medicamentos con entrega rápida y segura</p>
            <button onClick={handleLogout}>Volver a la página de inicio de sesion</button>
          </div>
        </section>
      </main>
    </div>
  );
}