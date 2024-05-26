import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "../contexts/ThemeProvider"

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TabelaFipe - Search",
  description: "Procure o preço de automóveis",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <ThemeProvider>
        <body className={roboto.className + "bg-light-pink"}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
