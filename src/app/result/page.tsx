import Link from "next/link"

type ParamsProps = {
  marca: string
  modelo: string
  ano: string
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: ParamsProps
}) {
  const data = await getCarPrice(searchParams)

  return (
    <main className="bg-light-green h-screen w-full flex flex-col text-gray-700">
      <div className="flex flex-col w-1/2 h-96 mx-auto my-24 justify-between">
        <BackBtn />

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-700">
            Tabela Fipe: Preço {data.Marca} {data.Modelo} {data.AnoModelo}
          </h2>

          <span className="p-4 py-2 text-xl bg-green-emereald text-white font-bold rounded-full">
            {data.Valor}
          </span>

          <span className="text-gray-500">Este é o preço de compra do veículo</span>
        </div>
      </div>
    </main>
  )
}

function BackBtn() {
  return (
    <Link
      className="flex items-center gap-2 text-lg self-start hover:text-green-emereald transition-colors"
      href="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        className="bi bi-chevron-left fill-gray-700"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
      Voltar
    </Link>
  )
}

async function getCarPrice({ marca, modelo, ano }: ParamsProps) {
  const url = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (err) {
    console.error(err)
  }
}
