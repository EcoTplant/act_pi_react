"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import App from "./app/App";


export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  if (isLoggedIn) {
    return <App />;
  }

 return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">¡Bienvenido a MediClick!</h1>
        <div className="home-buttons">
          <Link href="/login">
            <button className="home-button session">Iniciar Sesión</button>
          </Link>
          <Link href="/register">
            <button className="home-button register">Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}