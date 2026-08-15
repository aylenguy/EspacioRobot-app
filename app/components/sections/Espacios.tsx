"use client";

import Image from "next/image";
import styles from "./Espacios.module.css";

const fotos = [
  {
    src: "/images/espacio-1.jpg",
    alt: "Salón principal de Espacio Robot",
    label: "SALÓN PRINCIPAL",
  },
  {
    src: "/images/espacio-2.jpg",
    alt: "Robots y proyectos de los alumnos",
    label: "NUESTROS ROBOTS",
  },
  {
    src: "/images/espacio-3.jpg",
    alt: "Zona de trabajo e impresión 3D",
    label: "ZONA DE TRABAJO",
  },
  {
    src: "/images/espacio-4.jpg",
    alt: "Espacio de programación",
    label: "PROGRAMACIÓN",
  },
];

export default function Espacios() {
  return (
    <section id="espacios" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Nuestros <span className={styles.accent}>espacios</span>
        </h2>
        <p className={styles.subtitle}>
          Conocé por dentro Espacio Robot: salones pensados para chicos y chicas, y los robots con los que aprenden jugando.
        </p>
      </div>

      <div className={styles.grid}>
        {fotos.map((foto) => (
          <div key={foto.src} className={styles.frame}>
            <div className={styles.card}>
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className={styles.image}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              />
              <div className={styles.overlay} />
              <span className={styles.label}>{foto.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}