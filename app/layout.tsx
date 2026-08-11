import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import FloatingButtons from "./components/sections/FloatingButtons";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://espaciorobot.vercel.app"), // TODO: reemplazar cuando compres el dominio
  title: {
    default: "Espacio Robot - Cursos de robótica en Rosario",
    template: "%s | Espacio Robot",
  },
  description: "Formamos a chicos, adolescentes y adultos en robótica, programación e inteligencia artificial mediante clases prácticas en Rosario. ¡Inscripciones abiertas!",
  keywords: [
    "robótica",
    "cursos de robótica",
    "programación para chicos",
    "inteligencia artificial",
    "clases de robótica Rosario",
    "Espacio Robot",
  ],
  icons: {
    icon: [
      { url: "/images/favicon--32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon--16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-.ico", sizes: "any" },
    ],
    apple: "/images/apple--icon.png",
  },
  openGraph: {
    title: "Espacio Robot - Cursos de robótica en Rosario",
    description: "Formamos a chicos, adolescentes y adultos en robótica, programación e inteligencia artificial.",
    url: "https://espaciorobot.vercel.app",
    siteName: "Espacio Robot",
    images: [
      {
        url: "/images/robot-ubicacion.jpeg",
        width: 1600,
        height: 1067,
        alt: "Fachada de Espacio Robot",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacio Robot - Cursos de robótica en Rosario",
    description: "Formamos a chicos, adolescentes y adultos en robótica, programación e inteligencia artificial.",
     images: ["/images/robot-ubicacion.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Espacio Robot",
  description: "Escuela de robótica, programación e inteligencia artificial para chicos, adolescentes y adultos en Rosario.",
  url: "https://espaciorobot.vercel.app",
  logo: "https://espaciorobot.vercel.app/images/logo-robot.png",
  image: "https://espaciorobot.vercel.app/images/robot-ubicacion.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 de Febrero 1486",
    addressLocality: "Rosario",
    addressRegion: "Santa Fe",
    postalCode: "S2000",
    addressCountry: "AR",
  },
  telephone: "+5493417499663",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}