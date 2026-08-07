"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const enlaces = [
  { label: "Cursos", href: "#cursos" },
  { label: "Nosotros", href: "#nosotros" },
  //{ label: "Testimonios", href: "#testimonios" },
   { label: "FAQ", href: "#faq" },
  { label: "Sede", href: "#sedes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className={styles.statusBar}>
      <div className={styles.brand}>
        <Image
          src="/images/logo.png"
          alt="Espacio Robot"
          width={150}
          height={42}
          priority
        />
      </div>

      <div className={styles.statusRight}>
        <nav>
          <ul>
            {enlaces.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Botón hamburguesa: solo visible en mobile via CSS */}
      <button
        className={`${styles.menuBtn} ${menuAbierto ? styles.menuBtnOpen : ""}`}
        onClick={() => setMenuAbierto((v) => !v)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menú mobile desplegable */}
      <nav
        className={`${styles.mobileNav} ${
          menuAbierto ? styles.mobileNavOpen : ""
        }`}
      >
        <ul>
          {enlaces.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuAbierto(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
