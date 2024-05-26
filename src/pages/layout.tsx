import Head from "next/head"
import { PropsWithChildren } from "react"

import { Roboto } from "next/font/google"

import { ThemeProvider } from "../contexts/ThemeProvider"

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] })

import { FipeContextProvider } from "@/contexts/AppContext"

export function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div className={roboto.className}>
      <Head>
        <title>TabelaFipe - Search</title>
      </Head>

      <ThemeProvider>
        <FipeContextProvider>{children}</FipeContextProvider>
      </ThemeProvider>
    </div>
  )
}
