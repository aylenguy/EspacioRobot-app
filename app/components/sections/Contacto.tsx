"use client";


import { useState } from "react";
import styles from "./Contacto.module.css";

// Placeholder editable: reemplazá por los datos reales de contacto.
const WHATSAPP_NUMERO = "5493417482886"; // sin + ni espacios, con código de país

const infoContacto = [
  {
    label: "Email",
    valor: "instituto.coding@gmail.com",
    icono: "email" as const,
  },
  {
    label: "WhatsApp",
    valor: "+54 341 748-2886",
    icono: "whatsapp" as const,
  },
  {
    label: "Ubicación",
    valor: "Rosario, Santa Fe, Argentina",
    icono: "ubicacion" as const,
  },
];

function Icono({ tipo }: { tipo: "email" | "whatsapp" | "ubicacion" }) {
  if (tipo === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="m4 6 8 7 8-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tipo === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [soy, setSoy] = useState<"padre" | "institucion">("padre");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) return;

    const soyTexto = soy === "padre" ? "Padre/Madre" : "Institución educativa";

    const texto = [
      `Hola! Soy ${nombre} (${soyTexto}).`,
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : null,
      `Mensaje: ${mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.content}>
       

        <h2 className={styles.title}>
          ¿Querés <span className={styles.accent}>saber más?</span>
        </h2>

        <p className={styles.lead}>
          Completá el formulario y nos pondremos en contacto con vos a la brevedad.
        </p>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="nombre">
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  className={styles.input}
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className={styles.input}
                  placeholder="(Opcional)"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div className={styles.field}>
              <label className={styles.label} htmlFor="mensaje">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                className={styles.textarea}
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.submitIcon}
              >
                <path
                  d="m3 11 18-8-8 18-2-8-8-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              Enviar por WhatsApp
            </button>
          </form>

          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>
              También podés escribirnos por
            </h3>

            <div className={styles.infoList}>
              {infoContacto.map((item) => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <Icono tipo={item.icono} />
                  </span>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    <p className={styles.infoValor}>{item.valor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}