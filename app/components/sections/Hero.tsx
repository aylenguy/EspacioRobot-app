"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3wo934EoASt0vrmia4p1--YdZpghrr0MMXwql--k-DQuZMw/viewform?entry.123456789=Rob%C3%B3tica+para+Ni%C3%B1os";

function RocketIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <>

    
      {/* Fondo tecnológico */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.scanline} aria-hidden="true" />

      {/* HERO */}
      <main className={styles.hero}>
        {/* Decoración */}
        <div className={styles.decorCircle} aria-hidden="true">
          <div className={styles.circleRingOne} />
          <div className={styles.circleRingTwo} />
          <div className={styles.circleRingThree} />
        </div>

        {/* Contenido */}
        <div className={styles.heroContent}>
          <a
           href={FORM_URL}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.inscripciones}
  aria-label="Inscribite ahora - abre el formulario de inscripción en una pestaña nueva"
>
  <span className={styles.blinkDot} />
  <RocketIcon />
  <span>INSCRIPCIONES ABIERTAS</span>
</a>

          <h1 className={styles.headline}>
            Aprendé a crear
            <span className={styles.accent}> el futuro.</span>
          </h1>

          <p className={styles.lead}>
            Formamos a chicos, adolescentes y adultos en robótica,
            programación e inteligencia artificial mediante clases
            prácticas, desafíos y proyectos reales.
          </p>

          <div className={styles.actions}>
            <a href="#cursos" className={styles.btnPrimary}>
              Ver cursos
              <span> →</span>
            </a>

            <a
             href={FORM_URL}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.btnGhost}
>
  <RocketIcon />
  Inscribirme
</a>
          </div>

     
        </div>

        {/* Visual derecho */}
        <div className={styles.heroVisual}>
          <div className={styles.visualGlow} />
          <div className={styles.visualGrid} />

          <div className={styles.robotContainer}>
            <div className={styles.robotHalo} />

            <Image
              src="/images/img-hero.webp"
              alt="Alumno aprendiendo robótica y programación"
              width={560}
              height={560}
              priority
              className={styles.robotImage}
            />
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTop}`}>
            <span className={styles.cardNumber}>01</span>

            <div>
              <span className={styles.cardLabel}>APRENDER</span>
              <strong>Haciendo</strong>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.cardDot} />

            <div>
              <span className={styles.cardLabel}>
                ÁREAS DE FORMACIÓN
              </span>

              <strong>
                Robótica · Impresión 3D · Inteligencia Artificial · Scratch
              </strong>
            </div>
          </div>

          <div className={styles.sideLabel}>
            <span>01</span>
            EXPERIENCIA
          </div>
        </div>
      </main>
    </>
  );
}