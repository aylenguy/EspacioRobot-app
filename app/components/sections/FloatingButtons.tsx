import styles from "./FloatingButtons.module.css";

// Número de WhatsApp con código de país, sin + ni espacios.
const WHATSAPP_NUMERO = "5493417499663";

// Usuario de Instagram sin @.
const INSTAGRAM_USUARIO = "espaciorobotok";

// Mensaje pre-cargado al abrir WhatsApp desde el botón flotante.
const WHATSAPP_MENSAJE =
  "¡Hola Espacio Robot! Quiero info de los cursos.";

export default function FloatingButtons() {
  return (
    <div className={styles.wrapper}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
          WHATSAPP_MENSAJE
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
        aria-label="Escribinos por WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M16.004 3C9.376 3 4 8.373 4 15c0 2.31.64 4.47 1.75 6.31L4 29l7.86-1.71A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-2.02 0-3.9-.57-5.5-1.56l-.395-.24-4.664 1.015 1.02-4.53-.258-.415A9.66 9.66 0 0 1 6.3 15c0-5.35 4.36-9.7 9.704-9.7 5.343 0 9.696 4.35 9.696 9.7s-4.353 9.7-9.696 9.7Z"
          />
          <path
            fill="currentColor"
            d="M21.2 17.66c-.286-.144-1.694-.836-1.956-.932-.263-.096-.454-.144-.645.144-.19.287-.74.932-.907 1.123-.167.19-.334.215-.62.072-.287-.144-1.21-.446-2.304-1.42-.852-.76-1.427-1.698-1.594-1.985-.167-.287-.018-.442.126-.585.13-.129.287-.335.43-.502.144-.167.192-.287.287-.478.096-.19.048-.359-.024-.502-.072-.144-.645-1.556-.884-2.132-.233-.56-.47-.484-.645-.493l-.55-.01c-.19 0-.502.072-.765.359-.263.287-1.003.98-1.003 2.393s1.027 2.776 1.17 2.966c.144.19 2.022 3.087 4.9 4.33.685.295 1.219.472 1.635.605.687.219 1.312.188 1.806.114.551-.082 1.694-.693 1.933-1.362.24-.669.24-1.243.168-1.363-.072-.12-.263-.191-.549-.335Z"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href={`https://instagram.com/${INSTAGRAM_USUARIO}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.instagram}`}
        aria-label="Seguinos en Instagram"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="4.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}