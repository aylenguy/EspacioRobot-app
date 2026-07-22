"use client";

import Image from "next/image";
import styles from "./Nosotros.module.css";

// Placeholder editable: reemplazá nombre, rol y foto real de cada integrante.
const equipoFotos = [
  {
    nombre: "Nombre Apellido",
    rol: "Director General",
    foto: "/images/persona-1.jpg",
  },
  {
    nombre: "Nombre Apellido",
    rol: "Coordinadora Pedagógica",
    foto: "/images/persona-1.jpg",
  },
  {
    nombre: "Nombre Apellido",
    rol: "Coordinadora Pedagógica",
 foto: "/images/persona-1.jpg",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.content}>
        
    <h2 className={styles.title}>
  Quiénes <span className={styles.accent}>somos</span>
</h2>
        <p className={styles.lead}>
          Espacio Robot nació para acercar la robótica, la programación y la
          inteligencia artificial a todas las edades, con una mirada práctica
          y cercana.
        </p>

        {/* Equipo con foto */}
        <div className={styles.fotosGrid}>
          {equipoFotos.map((persona) => (
            <div key={persona.nombre} className={styles.fotoCard}>
              <div className={styles.fotoWrap}>
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  width={220}
                  height={220}
                  className={styles.fotoImg}
                />
              </div>
              <h3 className={styles.fotoNombre}>{persona.nombre}</h3>
              <p className={styles.fotoRol}>{persona.rol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}