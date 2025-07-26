import './globals.css'
import { Config } from "../app/Components/Components_Segundarios/Config";
import { ConfigProvider } from "./Components/Components_Segundarios/ConfigText"

export const metadata = {
  title: "Ramon Brandão",
  description: "Portifólio de um Desenvolvedor Full Stack que transforma propósito em soluções digitais completas.",
  icons: {
    icon: "/LogoGuia.svg", // Corrigido aqui
  },
  openGraph: {
    title: "Ramon Brandão",
    description: "Portifólio de um Desenvolvedor Full Stack que transforma propósito em soluções digitais completas.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/LogoGuia.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}

