"use client";

import Image from "next/image";
import styles from "./Sede.module.css";

// Dirección real
const DIRECCION = "3 de Febrero 1486, Rosario, Santa Fe";

// Link correcto (sin markdown)
const MAPS_LINK = "https://maps.app.goo.gl/1pHDqAWkV5MFhBhx6";

// Mapa embebido
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  DIRECCION
)}&output=embed`;

export default function Sede() {
  return (
    <section id="sedes" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Nuestra <span className={styles.accent}>sede</span>
        </h2>
        <p className={styles.subtitle}>
          El lugar ideal para que tus hijos jueguen y aprendan en cada una de nuestras áreas de formación.
        </p>
      </div>

      <div className={styles.split}>
        
     {/* IZQUIERDA — IMAGEN */}
        <div className={styles.imageHalf}>
          <Image
            src="/images/robot-ubicacion.jpeg"
            alt="Fachada de Espacio Robot en 3 de Febrero 1486, Rosario"
            fill
            className={styles.image}
            priority
          />

          <div className={styles.imageOverlay} />

          <div className={styles.imageCaption}>
            <span className={styles.imageLabel}>NUESTRA SEDE</span>
            <h2 className={styles.imageTitle}>Espacio Robot</h2>
          </div>
        </div>

        {/* DERECHA — MAPA */}
        <div className={styles.mapHalf}>
          <div className={styles.mapAddress}>
            <span className={styles.mapDot} />
            {DIRECCION}
          </div>

          <div className={styles.mapFrameWrap}>
            <iframe
              src={MAPS_EMBED_SRC}
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Espacio Robot en el mapa"
              allowFullScreen
            />
          </div>

       
        </div>

      </div>
    </section>
  );
}
