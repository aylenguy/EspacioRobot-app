"use client";

import Image from "next/image";
import styles from "./Espacios.module.css";

const fotos = [
  {
    src: "/images/espacio-1.webp",
    alt: "Salón principal de Espacio Robot",
    label: "SALÓN PRINCIPAL",
    position: "center 70%", // antes 20%, bajamos para centrar mejor
  },
  {
    src: "/images/espacio-2.webp",
    alt: "Robots y proyectos de los alumnos",
    label: "NUESTROS ROBOTS",
    position: "center", // está bien, no tocar
  },
  {
    src: "/images/espacio-3.webp",
    alt: "Zona de trabajo e impresión 3D",
    label: "ZONA DE TRABAJO",
    position: "center 60%", 
  },
  {
    src: "/images/espacio-4.webp",
    alt: "Espacio de programación",
    label: "PROGRAMACIÓN",
    position: "center 30%", // está bien, no tocar
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
                style={{ objectPosition: foto.position }}
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