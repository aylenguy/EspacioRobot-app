"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

// Placeholder editable: reemplazá preguntas y respuestas por las definitivas.
const preguntas = [
  {
    pregunta: "¿Mi hijo tiene necesidades específicas de aprendizaje, puede participar?",
    respuesta:
      "Sí. Adaptamos la propuesta según el ritmo de cada chico y trabajamos en grupos reducidos para poder acompañar de cerca a cada uno.",
  },
  {
    pregunta: "¿Necesito tener conocimientos previos?",
    respuesta:
      "No, no hace falta ninguna experiencia previa. Empezamos desde cero y cada nivel está pensado para ir construyendo sobre lo aprendido.",
  },
  {
    pregunta: "¿A partir de qué edad se pueden inscribir?",
    respuesta:
      "Tenemos propuestas desde los 6 años en adelante, organizadas por niveles según edad y experiencia.",
  },
  {
    pregunta: "¿Espacio Robot es solo para niños?",
    respuesta:
      "No, también tenemos propuestas para adolescentes y adultos interesados en robótica, programación e inteligencia artificial.",
  },
  {
    pregunta: "¿Qué se aprende en Espacio Robot?",
    respuesta:
      "Robótica, programación, electrónica e inteligencia artificial de forma práctica, a través de proyectos reales y trabajo en equipo.",
  },
  {
    pregunta: "¿Mi institución puede tener un laboratorio de robótica?",
    respuesta:
      "Sí, trabajamos con instituciones educativas para equipar e implementar laboratorios de robótica. Escribinos para coordinar una reunión.",
  },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(0);

  const toggle = (index: number) => {
    setAbierta((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.content}>
   

        <h2 className={styles.title}>
          Todo lo que necesitás <span className={styles.accent}>saber</span>
        </h2>

        <p className={styles.lead}>
          ¿No encontrás lo que buscás? Escribinos y te respondemos.
        </p>

        <div className={styles.list}>
          {preguntas.map((item, index) => {
            const isOpen = abierta === index;
            return (
              <div key={item.pregunta} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.pregunta}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>

                <div
                  className={`${styles.answerWrap} ${
                    isOpen ? styles.answerWrapOpen : ""
                  }`}
                >
                  <p className={styles.answer}>{item.respuesta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}