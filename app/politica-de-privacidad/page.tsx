
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales de Espacio Robot.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "80px 20px",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>Política de Privacidad</h1>

      <p style={{ color: "#666", marginBottom: "40px" }}>
        Última actualización: agosto de 2026
      </p>

      <p>
        En Espacio Robot valoramos tu privacidad y la de tu familia. Esta
        política explica qué información recolectamos, para qué la usamos y
        cómo podés contactarnos ante cualquier consulta.
      </p>

      <h2>¿Qué datos recolectamos?</h2>

      <p>
        Cuando te inscribís a un curso o taller a través de nuestro formulario
        de inscripción, te pedimos nombre y apellido, teléfono de contacto y,
        según el curso, algunos datos adicionales del responsable. Este
        formulario es gestionado a través de Google Forms; nosotros no
        almacenamos esa información en servidores propios.
      </p>

      <h2>¿Para qué usamos tus datos?</h2>

      <p>
        Usamos esta información exclusivamente para gestionar tu inscripción,
        coordinar clases y comunicarnos con vos sobre novedades relacionadas
        con los cursos. No compartimos ni vendemos tus datos a terceros.
      </p>

      <h2>Servicios de terceros que utilizamos</h2>

      <p>
        Nuestro sitio utiliza Google Maps para mostrar la ubicación de nuestra
        sede, y Google Forms para gestionar inscripciones. Estos servicios
        pueden generar cookies o recolectar datos técnicos según sus propias
        políticas de privacidad, que podés consultar en{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Tus derechos</h2>

      <p>
        De acuerdo con la Ley 25.326 de Protección de Datos Personales de
        Argentina, tenés derecho a acceder, rectificar o solicitar la
        eliminación de tus datos personales en cualquier momento.
      </p>

      <h2>Contacto</h2>

      <p>
        Si tenés dudas sobre esta política o querés ejercer alguno de tus
        derechos, podés escribirnos a{" "}
        <a href="mailto:info@espaciorobot.com.ar">
          info@espaciorobot.com.ar
        </a>{" "}
        o por WhatsApp al{" "}
        <a
          href="https://wa.me/5493417499663"
          target="_blank"
          rel="noopener noreferrer"
        >
          +54 9 341 749-9663
        </a>
        .
      </p>
    </main>
  );
}

