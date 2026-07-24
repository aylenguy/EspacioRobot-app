"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

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
            <div className={styles.inscripciones}>
            <span className={styles.blinkDot} />
            <span>INSCRIPCIONES ABIERTAS</span>
            <br/>
            <br/>
          </div>

          <h1 className={styles.headline}>
            Aprendé a crear
            <span className={styles.accent}> el futuro.</span>
          </h1>

          <p className={styles.lead}>
            Formamos a chicos, adolescentes y adultos en robótica,
            programación e inteligencia artificial, a través de clases
            prácticas, desafíos y proyectos reales.
          </p>

          <div className={styles.actions}>
            <a href="#cursos" className={styles.btnPrimary}>
              Ver cursos
              <span>→</span>
            </a>

            <a href="#nosotros" className={styles.btnGhost}>
              Conocé la academia
            </a>
          </div>

        
        </div>

        {/* VISUAL DERECHO */}
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
              <span className={styles.cardLabel}>ÁREAS DE FORMACIÓN</span>
              <strong>Robótica · Código · IA</strong>
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