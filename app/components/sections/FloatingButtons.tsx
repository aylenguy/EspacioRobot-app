"use client";

import styles from "./FloatingButtons.module.css";

// Número de WhatsApp con código de país, sin + ni espacios.
const WHATSAPP_NUMERO = "5493417482886";

// Usuario de Instagram sin @.
const INSTAGRAM_USUARIO = "espaciorobot";

export default function FloatingButtons() {
  return (
    <div className={styles.wrapper}>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMERO}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
        aria-label="Escribinos por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3a9 9 0 0 0-7.75 13.55L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <path
            d="M8.5 8.7c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.5.2.5.7 1.6.7 1.7.1.1.1.3 0 .4-.1.2-.1.3-.3.5l-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .2 0 1-.4 1.4-.3.5-1.4.9-2 .9-.5 0-1.7-.1-3.4-1.2-2-1.3-3.3-3.4-3.4-3.6-.1-.1-.9-1.2-.9-2.4 0-1.1.6-1.7.8-1.9Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
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
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.6"
          />

          <circle
            cx="17.2"
            cy="6.8"
            r="1.1"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}