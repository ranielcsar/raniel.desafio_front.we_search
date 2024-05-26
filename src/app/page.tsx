import { FipeForm } from "@/components/FipeForm"
import { Container, Card } from "@mui/material"

export default async function Home() {
  const brands = await getBrands()

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

async function getBrands() {
  try {
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    const data = await response.json()

    return data
  } catch (err) {
    console.error(err)
  }
}
