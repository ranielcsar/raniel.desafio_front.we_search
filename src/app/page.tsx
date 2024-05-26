import { FipeForm } from "@/components/FipeForm"
import { Container, Card } from "@mui/material"

export default async function Home() {
  const brands = await getBrands()

  return (
    <main className="flex w-full h-screen bg-light-pink">
      <Container maxWidth="lg" className="m-auto">
        <hgroup className="text-center mb-4 text-gray-700">
          <h1 className="text-2xl font-bold md:text-4xl md:font-normal">Tabela Fipe</h1>
          <h2 className="text-xl md:text-2xl">
            Consulte o valor de um veículo de forma gratuita
          </h2>
        </hgroup>

        <Card className="p-5 md:p-10 w-full lg:w-1/2 m-auto">
          <FipeForm brands={brands} />
        </Card>
      </Container>
    </main>
  )
}

const url = process.env.API_URL as string

async function getBrands() {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (err) {
    console.error(err)
  }
}
