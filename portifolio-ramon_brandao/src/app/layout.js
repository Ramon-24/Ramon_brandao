import './globals.css'
import { Config } from "./Components/Config.js";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
          {children}
      </body>
    </html>
  )
}

