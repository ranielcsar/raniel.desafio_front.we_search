import { PropsWithChildren, createContext, useContext, useState } from "react"

export type CarOptions = {
  brand: string
  model: string
  year: string
}

type FipeContextProps = {
  carOptions: CarOptions
  updateCarOptions: (options: CarOptions) => void
}

const FipeContext = createContext<FipeContextProps>({} as FipeContextProps)

export function FipeContextProvider({ children }: PropsWithChildren<any>) {
  const [carOptions, setCarOptions] = useState<CarOptions>({
    brand: "",
    model: "",
    year: "",
  })

  function updateCarOptions({ brand, model, year }: CarOptions) {
    setCarOptions({ brand, model, year })
  }

  return (
    <FipeContext.Provider value={{ carOptions, updateCarOptions }}>
      {children}
    </FipeContext.Provider>
  )
}

export function useFipeContext() {
  return useContext(FipeContext)
}
