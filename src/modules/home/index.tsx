import { Card, Container } from "@mui/material"
import { FipeForm } from "@/modules/fipe-form"

import { Layout } from "@/pages/layout"
import { useEffect, useState } from "react"

type Brands = {
  codigo: string
  nome: string
}

export function HomeModule() {
  const [brands, setBrands] = useState<Brands[]>([])

  async function getBrands() {
    const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/`

    try {
      const response = await fetch(url)
      const data = await response.json()

      return data
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getBrands().then(setBrands)
  }, [])

  return (
    <main className="flex w-full h-screen bg-light-pink">
      <Container maxWidth="lg" className="m-auto">
        <hgroup className="text-center mb-4 text-gray-700">
          <h1 className="text-4xl">Tabela Fipe</h1>
          <h2 className="text-2xl">Consulte o valor de um veículo de forma gratuita</h2>
        </hgroup>

        <Card className="p-10 w-1/2 m-auto">
          <FipeForm brands={brands} />
        </Card>
      </Container>
    </main>
  )
}
