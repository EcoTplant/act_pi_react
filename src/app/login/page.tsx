"use client";
import React from "react";
import styles from "./sesion.module.css";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  return (
    <div className={styles.fondo}>
      <form className={styles.formulario} onSubmit={e => e.preventDefault()}>
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <Link href="/" passHref>
          <button type="button" onClick={handleLogin}>Entrar</button>
        </Link>
      </form>
    </div>
  );
}