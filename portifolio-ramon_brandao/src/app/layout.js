import './globals.css'
import { Config } from "./Components/Config.js";
import { ConfigProvider } from "../app/Components/ConfigText"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}

