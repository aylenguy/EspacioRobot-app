"use client";

import styles from "./Footer.module.css";

const enlaces = [
  { label: "Cursos", href: "#cursos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

// Placeholder editable: reemplazá por la ubicación real si cambia.
const UBICACION = "Rosario, Santa Fe, Argentina";

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandDot} />
            <span className={styles.brandName}>ESPACIO ROBOT</span>
          </div>

          <nav className={styles.nav}>
            <ul>
              {enlaces.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.location}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.locationIcon}
            >
              <path
                d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <span>{UBICACION}</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {anioActual} Espacio Robot. Todos los derechos reservados.
          </p>
          <p className={styles.tagline}>Robótica · Código · IA</p>
        </div>
      </div>
    </footer>
  );
}