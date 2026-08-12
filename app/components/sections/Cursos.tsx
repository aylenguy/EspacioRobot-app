"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "./Cursos.module.css";

type Callout = {
  texto: string;
  variante: "pink" | "orange" | "green" | "teal" | "purple" | "blue";
};

type CardDestacada = {
  imagen: string;
  descripcion: string;
  callouts: Callout[];
  edad: string;
  inscripcion: string;
  cuota: string;
  colorFrom?: string; // color inicial del gradiente del header
  colorTo?: string;   // color final del gradiente del header
  // Ancho de la imagen en px. Por defecto 190. Bajalo para fotos que
  // vienen más "cargadas"/grandes que los renders y se ven desproporcionadas.
  imagenAncho?: number;
};

type Curso = {
  id: string;
  numero: string;
  titulo: string;
  resumen: string;
  duracion: string;
  contenido: string[];
  formValor: string;
  // Si está presente, la card se renderiza con el diseño nuevo
  // (preview con imagen + botón "Conocer más" que abre un modal destacado).
  // Si no está, se usa la card simple de siempre.
  card?: CardDestacada;
};

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3wo934EoASt0vrmia4p1--YdZpghrr0MMXwql--k-DQuZMw/viewform";

const FORM_ENTRY_CURSO = "entry.123456789"; // ⚠️ reemplazar por el real

function buildFormUrl(curso: Curso) {
  const params = new URLSearchParams({
    [FORM_ENTRY_CURSO]: curso.formValor,
  });
  return `${GOOGLE_FORM_URL}?${params.toString()}`;
}

// Helper: arma el style con las variables CSS de color del header,
// solo si la card define colorFrom/colorTo. Si no, no se pasa nada
// y el CSS usa el fallback (rosa) definido en el .module.css.
function headerColorStyle(card: CardDestacada): CSSProperties | undefined {
  if (!card.colorFrom && !card.colorTo) return undefined;
  return {
    ["--card-color-from" as string]: card.colorFrom,
    ["--card-color-to" as string]: card.colorTo,
  } as CSSProperties;
}

const cursos: Curso[] = [
  {
    id: "robotica-ninos",
    numero: "01",
    titulo: "Alfabetización en Robótica y Programación",
    resumen: "Primeros pasos armando y programando robots.",
    duracion: "Clases de 1 h 30 min",
    formValor: "Robótica para Niños",
    contenido: [
      "Introducción a la robótica con kits didácticos",
      "Armado de circuitos simples y motores",
      "Primeros pasos en programación por bloques",
      "Proyectos grupales de construcción",
      "Desarrollo de pensamiento lógico y trabajo en equipo",
    ],
    card: {
      imagen: "/images/curso--1.png",
      descripcion:
        "Un espacio lúdico pensado para que los más chiquitos den sus primeros pasos en tecnología. Jugando, tocando y experimentando con los botones incorporados del robot, tarjetas y bloques, se enfrentan a pequeños desafíos que los ayudan a descubrir la lógica paso a paso.",
      callouts: [
        { texto: "Aprenden jugando, tocando y experimentando.", variante: "pink" },
        { texto: "No es requisito saber leer ni escribir.", variante: "orange" },
      ],
      edad: "4 a 6 años",
      inscripcion: "$ 30.000",
      cuota: "$ 70.000",
    },
  },
  {
  id: "robotica-inicial",
  numero: "02",
  titulo: "Robótica Educativa Inicial",
  resumen: "Primeros pasos en robótica con juegos y construcciones.",
  duracion: "Clases de 1 h 30 min",
  formValor: "Robótica Educativa Inicial",
  contenido: [
    "Introducción a engranajes, sensores y poleas",
    "Mecanismos simples y su funcionamiento",
    "Programación de robots propios",
    "Desafíos progresivos según el ritmo del alumno",
    "Desarrollo de pensamiento lógico y trabajo en equipo",
  ],
  card: {
    imagen: "/images/curso--6.png", // ⚠️ ajustar al nombre real del archivo
    descripcion:
      "Un espacio práctico y dinámico para adentrarse en la tecnología. Mediante juegos y construcciones, los chicos aprenden sobre engranajes, sensores, poleas y mecanismos simples, programando sus propios robots para darles vida. La propuesta desarrolla el pensamiento lógico y el trabajo en equipo con desafíos que avanzan gradualmente al ritmo de cada alumno.",
    callouts: [
      { texto: "Ideal para dar los primeros pasos en robótica.", variante: "blue" },
    ],
    edad: "6 a 12 años",
    inscripcion: "$ 30.000",
    cuota: "$ 70.000",
    colorFrom: "#2f5fdb",
    colorTo: "#4d7fff",
    imagenAncho: 150,
  },
},
{
  id: "robotica-avanzada",
  numero: "03",
  titulo: "Robótica Educativa Avanzada",
  resumen: "Retos tecnológicos para llevar la robótica al siguiente nivel.",
  duracion: "Clases de 1 h 30 min",
  formValor: "Robótica Educativa Avanzada",
  contenido: [
    "Diseño y armado de máquinas complejas",
    "Programación de rutinas avanzadas",
    "Interacción entre dispositivos",
    "Proyectos colaborativos",
    "Resolución de problemas reales",
  ],
  card: {
    imagen: "/images/curso--5.png", // ⚠️ ajustar al nombre real del archivo
    descripcion:
      "Diseñado para quienes completaron el nivel inicial y buscan nuevos retos tecnológicos. En este taller se potencian el pensamiento analítico, la concentración y la creatividad resolviendo problemas reales. Los alumnos diseñan máquinas complejas, programan rutinas avanzadas y exploran la interacción entre dispositivos a través de proyectos colaborativos.",
    callouts: [
  { texto: "Ideal para profundizar conocimientos y llevar la creatividad al siguiente nivel.", variante: "purple" },
  { texto: "Requiere conocimientos previos de robótica (nivel inicial completado).", variante: "purple" },
],
    edad: "9 a 13 años",
    inscripcion: "$ 30.000",
    cuota: "$ 70.000",
    colorFrom: "#7c3aed",
    colorTo: "#a78bfa",
  },
},
 {
    id: "programacion-scratch",
    numero: "04",
    titulo: "Programación con Scratch",
    resumen: "Lógica de programación creando juegos e historias.",
    duracion: "Clases de 1 h 30 min",
    formValor: "Programación con Scratch",
    contenido: [
      "Lógica de programación por bloques",
      "Secuencias, bucles y condicionales",
      "Creación de historias interactivas",
      "Diseño de videojuegos simples",
      "Proyecto final personalizado para mostrar en clase",
    ],
    card: {
      imagen: "/images/curso--4.png", // ⚠️ ajustar si el nombre real es distinto
      descripcion:
        "Un taller 100% creativo para aprender a programar interactuando con bloques visuales. Los participantes desarrollan la lógica, la secuencia de comandos y la resolución de problemas mientras crean animaciones y videojuegos propios. El recorrido es progresivo, enfocado en ganar confianza e impulsar la imaginación para construir proyectos desde cero.",
      callouts: [
        { texto: "La puerta de entrada ideal al universo del software.", variante: "teal" },
      ],
      edad: "8 a 12 años",
      inscripcion: "$ 30.000",
      cuota: "$ 70.000",
      colorFrom: "#0f8b93",
      colorTo: "#1cc7c9",
    },
  },
  
  {
    id: "impresion-3d-ninos",
    numero: "05",
    titulo: "Impresión 3D para Niños",
    resumen: "Diseño y modelado 3D para dar vida a tus ideas.",
    duracion: "Clases de 1 h 30 min",
    formValor: "Impresión 3D para Niños",
    contenido: [
      "Introducción al diseño y modelado 3D",
      "Uso de herramientas de modelado tridimensional",
      "Principios básicos de fabricación digital",
      "Desarrollo de la noción espacial",
      "Resolución de problemas paso a paso",
    ],
    card: {
      imagen: "/images/curso---2.png", 
      descripcion:
        "Un espacio técnico y creativo donde los chicos aprenden a transformar sus ideas en objetos reales. A través de herramientas de modelado tridimensional, exploran los principios del diseño y la fabricación digital, desarrollando la noción espacial y la resolución de problemas paso a paso.",
      callouts: [
        { texto: "Ideal para materializar la imaginación.", variante: "orange" },
      ],
      edad: "10 a 13 años",
      inscripcion: "$ 30.000",
      cuota: "$ 80.000 (insumos incl.)",
      colorFrom: "#f2790c",
      colorTo: "#ff9f42",
      imagenAncho: 150,
    },
  },
  {
    id: "inteligencia-artificial",
    numero: "06",
    titulo: "Inteligencia Artificial para Niños",
    resumen: "Herramientas de IA aplicadas a proyectos reales.",
    duracion: "Clases de 1 h 30 min",
    formValor: "Inteligencia Artificial para Niños",
    contenido: [
      "Introducción a conceptos de inteligencia artificial",
      "Uso de herramientas de IA generativa",
      "Creación y ajuste de prompts",
      "Nociones básicas de machine learning",
      "Proyecto práctico aplicando IA a un caso real",
    ],
    card: {
      imagen: "/images/curso--3.png", // ⚠️ ajustar si el nombre real es distinto
      descripcion:
        "Un taller 100% interactivo y creativo donde los chicos aprenden a transformar sus ideas usando la tecnología más moderna. Mediante la experimentación guiada y el juego, los participantes descubren el universo de la IA creando sus propios cuentos, ilustraciones, canciones y proyectos digitales. La propuesta estimula la imaginación, el pensamiento crítico y el uso responsable de las herramientas digitales.",
      callouts: [
        { texto: "Ideal para explorar el arte y la narrativa del futuro.", variante: "green" },
      ],
      edad: "7 a 12 años",
      inscripcion: "$ 30.000",
      cuota: "$ 70.000",
      colorFrom: "#3fae63",
      colorTo: "#63c98a",
      imagenAncho: 150,
    },
  },
 

];

function CardSimple({
  curso,
  onOpen,
}: {
  curso: Curso;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <span className={styles.cardNumber}>{curso.numero}</span>
      <h3 className={styles.cardTitle}>{curso.titulo}</h3>
      <p className={styles.cardResumen}>{curso.resumen}</p>
      <span className={styles.cardArrow} aria-hidden="true">
        →
      </span>
    </button>
  );
}

// Preview liviano: solo header + imagen + botón "Conocer más".
// El detalle completo (descripción, callouts, datos) vive en el modal.
function CardDestacadaPreview({
  curso,
  onOpen,
}: {
  curso: Curso & { card: CardDestacada };
  onOpen: () => void;
}) {
  const { card } = curso;

  return (
    <button
      type="button"
      className={styles.cardFull}
      onClick={onOpen}
      aria-haspopup="dialog"
    >
      <div
        className={styles.cardFullHeader}
        style={headerColorStyle(card)}
      >
        <h3 className={styles.cardFullTitle}>{curso.titulo}</h3>
        <span className={styles.cardFullSparkle} aria-hidden="true">
          ✦
        </span>
      </div>

      <div className={styles.cardFullImageWrap}>
      <Image
  src={card.imagen}
  alt={`Curso de ${curso.titulo} en Espacio Robot, para chicos de ${card.edad}`}
          width={220}
          height={220}
          className={styles.cardFullImage}
          style={card.imagenAncho ? { width: card.imagenAncho } : undefined}
        />
      </div>

      <span className={styles.cardFullMore}>
        Conocer más
        <span className={styles.cardFullMoreArrow} aria-hidden="true">
          →
        </span>
      </span>
    </button>
  );
}

// Modal con el detalle completo de la card destacada
// (header con color propio, imagen, descripción, callouts, datos y CTA).
function ModalDestacado({
  curso,
  onClose,
}: {
  curso: Curso & { card: CardDestacada };
  onClose: () => void;
}) {
  const { card } = curso;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="curso-destacado-modal-title"
      onClick={onClose}
    >
      <div
        className={styles.modalDestacado}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtnLight}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div
          className={styles.cardFullHeader}
          style={headerColorStyle(card)}
        >
          <h3
            id="curso-destacado-modal-title"
            className={styles.cardFullTitle}
          >
            {curso.titulo}
          </h3>
          <span className={styles.cardFullSparkle} aria-hidden="true">
            ✦
          </span>
        </div>

        <div className={styles.cardFullImageWrap}>
        <Image
  src={card.imagen}
  alt={`Curso de ${curso.titulo} en Espacio Robot, para chicos de ${card.edad}`}
            width={220}
            height={220}
            className={styles.cardFullImage}
            style={card.imagenAncho ? { width: card.imagenAncho } : undefined}
          />
        </div>

        <p className={styles.cardFullDescripcion}>{card.descripcion}</p>

        <div className={styles.cardFullCallouts}>
       {card.callouts.map((c) => (
  <p
    key={c.texto}
    className={
      c.variante === "pink"
        ? styles.calloutPink
        : c.variante === "green"
        ? styles.calloutGreen
        : c.variante === "teal"
        ? styles.calloutTeal
        : c.variante === "purple"
        ? styles.calloutPurple
        : c.variante === "blue"
        ? styles.calloutBlue
        : styles.calloutOrange
    }
  >
    {c.texto}
  </p>
))}
        </div>

        <div className={styles.cardFullStats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Edad</span>
            <span className={styles.statValue}>{card.edad}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Inscripción</span>
            <span className={styles.statValue}>{card.inscripcion}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Cuota mensual</span>
            <span className={styles.statValue}>{card.cuota}</span>
          </div>
        </div>

        <div className={styles.modalDestacadoCtaWrap}>
          <a
            href={buildFormUrl(curso)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.modalCta}
          >
            Inscribirme
            <span>→</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

function CursoModal({
  curso,
  onClose,
}: {
  curso: Curso;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="curso-modal-title"
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <span className={styles.modalNumber}>{curso.numero}</span>
        <h3 id="curso-modal-title" className={styles.modalTitle}>
          {curso.titulo}
        </h3>

        <div className={styles.modalDuration}>
          <span className={styles.durationDot} />
          {curso.duracion}
        </div>

        <p className={styles.modalLabel}>QUÉ INCLUYE EL CURSO</p>
        <ul className={styles.modalList}>
          {curso.contenido.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href={buildFormUrl(curso)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.modalCta}
        >
          Inscribirme
          <span>→</span>
        </a>
      </div>
    </div>,
    document.body
  );
}

export default function Cursos() {
  const [activo, setActivo] = useState<Curso | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const activoConCard =
    activo && activo.card ? (activo as Curso & { card: CardDestacada }) : null;
  const activoSimple = activo && !activo.card ? activo : null;

  return (
    <section id="cursos" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Cursos y talleres <span className={styles.accent}>disponibles</span>
        </h2>
        <p className={styles.subtitle}>
          Elegí el programa que mejor se adapte y descubrí de qué se trata
          cada clase.
        </p>
      </div>

      <div className={styles.grid}>
        {cursos.map((curso) =>
          curso.card ? (
            <CardDestacadaPreview
              key={curso.id}
              curso={curso as Curso & { card: CardDestacada }}
              onOpen={() => setActivo(curso)}
            />
          ) : (
            <CardSimple
              key={curso.id}
              curso={curso}
              onOpen={() => setActivo(curso)}
            />
          )
        )}
      </div>

      {mounted && activoConCard && (
        <ModalDestacado curso={activoConCard} onClose={() => setActivo(null)} />
      )}

      {mounted && activoSimple && (
        <CursoModal curso={activoSimple} onClose={() => setActivo(null)} />
      )}
    </section>
  );
}
