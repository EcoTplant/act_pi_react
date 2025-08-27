"use client"; // Necesario para que los botones respondan a eventos en el cliente (aunque no los uses aún)

import React from "react";

export default function Page() {
  return (
    <div>
      <h1>Página de inicio</h1>

      <div>
        <button className="sesion">Iniciar Sesión</button>
        <button className="register">Registrarse</button>
      </div>
    </div>
  );
}