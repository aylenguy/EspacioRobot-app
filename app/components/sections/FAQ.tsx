"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

// Placeholder editable: reemplazá preguntas y respuestas por las definitivas.
const preguntas = [
  {
    pregunta: "¿Cuándo empiezan las clases?",
    respuesta:
      "El inicio de clases es el 18 de agosto de 2026. La inscripción está abierta todo el año, así que podés sumarte en cualquier momento.",
  },
  {
    pregunta: "¿Necesito tener conocimientos previos?",
    respuesta:
      "No, no hace falta ninguna experiencia previa. Empezamos desde cero y cada nivel está pensado para ir construyendo sobre lo aprendido.",
  },
  {
    pregunta: "¿A partir de qué edad se pueden inscribir?",
    respuesta:
      "Tenemos propuestas desde los 4 años en adelante, organizadas por niveles según edad y experiencia.",
  },
 {
    pregunta: "¿Qué se aprende en Espacio Robot?",
    respuesta:
      "Robótica · Impresión 3D · Inteligencia Artificial · Scratch, de forma práctica, a través de proyectos reales y trabajo en equipo.",
  },
  {
    pregunta: "¿Cuánto dura cada clase?",
    respuesta:
      "Las clases son presenciales y duran 90 minutos.",
  },
  {
    pregunta: "¿Tengo que llevar mi propia PC o herramientas?",
    respuesta:
      "No, los kits, PCs y herramientas necesarios ya están incluidos. Solo tenés que venir a la clase.",
  },
  {
    pregunta: "¿Puedo probar una clase antes de inscribirme?",
    respuesta:
      "Sí, ofrecemos una clase de prueba gratuita para que los chicos conozcan el espacio y experimenten con nuestros kits. La inscripción y el proporcional de la cuota se abonan recién a partir de la segunda clase.",
  },
  {
    pregunta: "¿Hay descuento si se inscriben hermanos o amigos juntos?",
    respuesta:
      "Sí, inscribiéndose juntos obtienen un 10% de rebaja en la cuota mensual y un 50% en la inscripción individual.",
  },
  {
    pregunta: "¿Qué pasa si mi hijo falta a una clase?",
    respuesta:
      "Las faltas justificadas y avisadas con anticipación se pueden recuperar en otras comisiones, sujeto a disponibilidad de cupo.",
  },
  {
    pregunta: "¿Las clases se recuperan si caen en un feriado?",
    respuesta:
      "No. Las clases que coinciden con feriados nacionales o provinciales no son recuperables.",
  },
  {
    pregunta: "¿Mi hijo tiene necesidades específicas de aprendizaje, puede participar?",
    respuesta:
      "Sí. Adaptamos la propuesta según el ritmo de cada chico y trabajamos en grupos reducidos para poder acompañar de cerca a cada uno.",
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
