"use client"

import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"

import { SelectInput } from "@/components/SelectInput"
import { Button } from "./Button"
import { CircularProgress } from "@mui/material"

type FormProps = {
  brand: string | null
  model: string | null
  year: string | null
}

type Props = {
  brands: { codigo: string; nome: string }[]
}

const url = process.env.API_URL as string

export function FipeForm({ brands }: Props) {
  const router = useRouter()
  const { register, handleSubmit, watch, setValue, resetField } = useForm<FormProps>()
  const [options, setOptions] = useState({
    models: [],
    years: [],
  })

  let [isSubmiting, startTransition] = useTransition()

  const brand = watch("brand", null)
  const model = watch("model", null)
  const year = watch("year", null)

  const [loading, setLoading] = useState({
    models: false,
    years: false,
  })
  function handleLoading(key: "models" | "years", value: boolean) {
    setLoading((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  async function getModels() {
    try {
      handleLoading("models", true)
      await fetch(`${url}/${brand}/modelos/`).then(async (response) => {
        const data = await response.json()

        setOptions((prev) => ({
          ...prev,
          models: data.modelos,
        }))
      })
    } catch (error) {
      console.error(error)
    } finally {
      handleLoading("models", false)
    }
  }

  async function getYears() {
    try {
      handleLoading("years", true)
      await fetch(`${url}/${brand}/modelos/${model}/anos`).then(async (response) => {
        const data = await response.json()

        setOptions((prev) => ({
          ...prev,
          years: data,
        }))
      })
    } catch (error) {
      console.error(error)
    } finally {
      handleLoading("years", false)
    }
  }

  useEffect(() => {
    if (brand) getModels()
  }, [brand])

  useEffect(() => {
    if (model) getYears()
  }, [model])

  const brandOptions = optionsWithLabelAndValue(brands)
  const modelOptions = optionsWithLabelAndValue(options.models)
  const yearOptions = optionsWithLabelAndValue(options.years)

  const disabledModels = modelOptions.length === 0
  const showYearInput = model && !disabledModels

  const submitBtnDisabled = !brand || !model || !year

  const onSubmit: SubmitHandler<FormProps> = async ({ brand, model, year }) => {
    try {
      startTransition(() => {
        router.push(`result?marca=${brand}&modelo=${model}&ano=${year}`)
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (!brand) {
      resetField("model")
      resetField("year")

      setOptions({
        models: [],
        years: [],
      })
    }
  }, [brand])

  return (
    <form
      id="fipe-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <SelectInput
        {...register("brand")}
        label="Marca"
        options={brandOptions}
        onChange={(_, value) => {
          if (!value) return setValue("brand", value)

          setValue("brand", value.value)
        }}
      />

      <SelectInput
        {...register("model")}
        key={brand}
        label={loading.models ? "Carregando..." : "Modelo"}
        options={modelOptions}
        disabled={disabledModels || loading.models}
        onChange={(_, value) => {
          if (!value) return setValue("model", value)

          setValue("model", value.value)
        }}
      />

      {showYearInput && (
        <SelectInput
          {...register("year")}
          label={loading.years ? "Carregando..." : "Ano"}
          disabled={loading.years}
          options={yearOptions}
          onChange={(_, value) => {
            if (!value) return setValue("year", value)

            setValue("year", value.value)
          }}
        />
      )}

      <Button
        className="w-max m-auto mt-4 py-2 px-8 normal-case text-white"
        size="large"
        variant="contained"
        type="submit"
        form="fipe-form"
        disabled={submitBtnDisabled || isSubmiting}
      >
        {isSubmiting ? <CircularProgress size={30} color="inherit" /> : "Consultar preço"}
      </Button>
    </form>
  )
}

function optionsWithLabelAndValue(options: any[]) {
  if (!options && !Array.isArray(options)) return []

  return options.map((option) => ({
    label: String(option.nome),
    value: String(option.codigo),
  }))
}
