
import styles from "./Testimonios.module.css";

// Placeholder editable: reemplazá por testimonios reales confirmados por el cliente.
const testimonios = [
  {
    iniciales: "AN",
    texto:
      "Benja llegó a casa y no dejaba de hablar del robot que construyó. Los profes son increíbles y los chicos aprenden jugando.",
    nombre: "Aldana Núñez",
    detalle: "Mamá de Benjamín, 11 años · Rosario",
  },
  {
    iniciales: "CI",
    texto:
      "No encontraba para mi hija una actividad que disfrute. Acá no solo adquiere herramientas para su futuro, sino que también encontró nuevos amigos.",
    nombre: "Carlos Ibarra",
    detalle: "Papá de Sofía, 8 años · Ciudad de Gálvez",
  },
  {
    iniciales: "L",
    texto:
      "Mis dos hijos empezaron juntos. Tienen personalidades muy distintas y ahora los dos esperan que llegue el día de su clase de robótica.",
    nombre: "Lucía",
    detalle: "Mamá de Ignacio y Nico",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.content}>
   

        <h2 className={styles.title}>
          Lo que dicen <span className={styles.accent}>nuestras familias</span>
        </h2>

        <p className={styles.lead}>
          Familias y alumnos que ya viven la experiencia de aprender jugando.
        </p>

        <div className={styles.grid}>
          {testimonios.map((t) => (
            <div key={t.nombre} className={styles.card}>
              <span className={styles.quote}>&#8220;</span>
              <p className={styles.texto}>{t.texto}</p>
              <div className={styles.footer}>
                <span className={styles.avatar}>{t.iniciales}</span>
                <div>
                  <p className={styles.nombre}>{t.nombre}</p>
                  <p className={styles.detalle}>{t.detalle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}