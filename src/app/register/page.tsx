"use client";
import React from "react";
import styles from "./register.module.css";
import Link from "next/link";

export default function RegisterPage() {
  const handleRegister = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  return (
    <div className={styles.fondo}>
      <form className={styles.formulario} onSubmit={e => e.preventDefault()}>
        <h2>Crear un Usuario</h2>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="text" placeholder="Usuario" required />
        <input type="tel" placeholder="Número de teléfono" required />
        <Link href="/" passHref>
          <button type="button" onClick={handleRegister}>Registrarse</button>
        </Link>
        </form>
    </div>
  );
}