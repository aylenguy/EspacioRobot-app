"use client";

import Image from "next/image";
import styles from "./TallerIntegralBanner.module.css";

type Area = {
  imagen: string; // ruta dentro de /public, ej: "/images/logos/scratch.png"
  label: string;
  variante: "orange" | "blue" | "purple" | "teal";
};

// ⚠️ Reemplazar cada "imagen" por la ruta real del logo/foto una vez subida a /public/images/logos/
// Recomendación: usar PNG con fondo transparente, cuadrado (ej. 128x128 o 256x256px)
// para que se vea prolijo dentro del círculo/card de cada área.
const AREAS: Area[] = [
  { imagen: "/images/programacion.png", label: "Programación", variante: "orange" },
  { imagen: "/images/robotica.png", label: "Robótica", variante: "blue" },
  { imagen: "/images/impresion.png", label: "Impresión 3D", variante: "purple" },
  { imagen: "/images/ia.png", label: "IA", variante: "teal" },
];

export default function TallerIntegralBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.blobOne} aria-hidden="true" />
        <div className={styles.blobTwo} aria-hidden="true" />

        <span className={styles.eyebrow}> Nuevo · Único en Rosario</span>

        <h2 className={styles.title}>
          <span className={styles.titleLine1}>TALLER</span>
          <span className={styles.titleLine2}>Integral Tecnológico</span>
        </h2>

        <p className={styles.subtitle}>
          Robótica · Programación · IA · Impresión 3D — todo en un mismo taller.
        </p>

        <div className={styles.areas}>
          {AREAS.map(({ imagen, label, variante }) => (
            <div key={label} className={`${styles.areaCard} ${styles[`area-${variante}`]}`}>
              <div className={styles.areaIcon}>
                <Image
                  src={imagen}
                  alt={label}
                  fill
                  sizes="72px"
                  className={styles.areaImage}
                />
              </div>
              <span className={styles.areaLabel}>{label}</span>
            </div>
          ))}
        </div>

        <a href="#cursos" className={styles.cta}>
          Conocer el taller
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
