"use client";

import { useEffect, useState } from "react";
import styles from "./Cursos.module.css";

type Curso = {
  id: string;
  numero: string;
  titulo: string;
  resumen: string;
  duracion: string;
  contenido: string[];
};

// Placeholder editable: ajustá título, resumen, duración y contenido
// de cada curso cuando el cliente te confirme el detalle definitivo.
const cursos: Curso[] = [
  {
    id: "robotica-ninos",
    numero: "01",
    titulo: "Robótica para Niños",
    resumen: "Primeros pasos armando y programando robots.",
    duracion: "Clases de 1 h 30 min",
    contenido: [
      "Introducción a la robótica con kits didácticos",
      "Armado de circuitos simples y motores",
      "Primeros pasos en programación por bloques",
      "Proyectos grupales de construcción",
      "Desarrollo de pensamiento lógico y trabajo en equipo",
    ],
  },
  {
    id: "programacion-scratch",
    numero: "02",
    titulo: "Programación con Scratch",
    resumen: "Lógica de programación creando juegos e historias.",
    duracion: "Clases de 1 h 30 min",
    contenido: [
      "Lógica de programación por bloques",
      "Secuencias, bucles y condicionales",
      "Creación de historias interactivas",
      "Diseño de videojuegos simples",
      "Proyecto final personalizado para mostrar en clase",
    ],
  },
  {
    id: "inteligencia-artificial",
    numero: "03",
    titulo: "Inteligencia Artificial",
    resumen: "Herramientas de IA aplicadas a proyectos reales.",
    duracion: "Clases de 1 h 30 min",
    contenido: [
      "Introducción a conceptos de inteligencia artificial",
      "Uso de herramientas de IA generativa",
      "Creación y ajuste de prompts",
      "Nociones básicas de machine learning",
      "Proyecto práctico aplicando IA a un caso real",
    ],
  },
];

export default function Cursos() {
  const [activo, setActivo] = useState<Curso | null>(null);

  useEffect(() => {
    if (!activo) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivo(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activo]);

  return (
    <section id="cursos" className={styles.section}>
      <div className={styles.header}>
       
       <h2 className={styles.title}>
  Programas <span className={styles.accent}>disponibles</span>
</h2>
        <p className={styles.subtitle}>
          Elegí el programa que mejor se adapte y descubrí de qué se trata
          cada clase.
        </p>
      </div>

      <div className={styles.grid}>
        {cursos.map((curso) => (
          <button
            key={curso.id}
            type="button"
            className={styles.card}
            onClick={() => setActivo(curso)}
            aria-haspopup="dialog"
          >
            <span className={styles.cardNumber}>{curso.numero}</span>
            <h3 className={styles.cardTitle}>{curso.titulo}</h3>
            <p className={styles.cardResumen}>{curso.resumen}</p>
            <span className={styles.cardArrow} aria-hidden="true">
              →
            </span>
          </button>
        ))}
      </div>

      {activo && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="curso-modal-title"
          onClick={() => setActivo(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setActivo(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <span className={styles.modalNumber}>{activo.numero}</span>
            <h3 id="curso-modal-title" className={styles.modalTitle}>
              {activo.titulo}
            </h3>

            <div className={styles.modalDuration}>
              <span className={styles.durationDot} />
              {activo.duracion}
            </div>

            <p className={styles.modalLabel}>QUÉ INCLUYE EL CURSO</p>
            <ul className={styles.modalList}>
              {activo.contenido.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href="#contacto" className={styles.modalCta}>
              Consultar por este curso
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
