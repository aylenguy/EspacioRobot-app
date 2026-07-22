"use client";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.statusBar}>
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span>ACADEMIA DE TECNOLOGÍA</span>
      </div>

      <div className={styles.statusRight}>
        <nav>
          <ul>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#sedes">Sedes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}