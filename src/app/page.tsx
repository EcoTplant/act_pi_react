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
    <div>
      <h1>Página de inicio</h1>
      <div>
        <Link href="/login">
          <button className="sesion">Iniciar Sesión</button>
        </Link>
        <Link href="/register">
          <button className="register">Registrarse</button>
        </Link>
      </div>
    </div>
  );
}