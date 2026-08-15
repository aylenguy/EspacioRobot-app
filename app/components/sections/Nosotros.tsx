
import Image from "next/image";
import styles from "./Nosotros.module.css";

const equipoFotos = [
  {
    nombre: "Martín Artigas",
    rol: "Fundador / Dirección General",
    foto: "/images/martin.png",
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
  En Espacio Robot los niños/as juegan, arman, programan y se equivocan sin apuro, aprendiendo sin darse cuenta lo que van a usar toda la vida. Un espacio propio, con equipo docente capacitado, para animarse a crear con la tecnología en vez de solo consumirla.
</p>

        {/* Equipo con foto */}
        <div className={styles.fotosGrid}>
          {equipoFotos.map((persona) => (
            <div key={persona.nombre} className={styles.fotoCard}>
             <div className={styles.fotoWrap}>
  <Image
    src={persona.foto}
    alt={`${persona.nombre}, ${persona.rol} de Espacio Robot`}
    fill
    sizes="200px"
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