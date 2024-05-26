"use client"

import { TextField, Autocomplete, AutocompleteProps } from "@mui/material"
import { forwardRef } from "react"

type Props = {
  options: {
    label: string
    value: string
  }[]
  label: string
  name: string
} & Partial<AutocompleteProps<any, any, any, true>>

// eslint-disable-next-line react/display-name
export const SelectInput = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { label, options } = props

  return (
    <Autocomplete
      disablePortal
      renderInput={(params) => {
        return <TextField label={label} {...params} inputRef={ref} />
      }}
      {...props}
      options={options}
    />
  )
})
