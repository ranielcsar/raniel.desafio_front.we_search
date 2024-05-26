"use client"
import { Button as MButton, ButtonProps } from "@mui/material"

export function Button(props: ButtonProps) {
  return (
    <MButton
      {...props}
      className="w-max m-auto mt-4 py-2 px-8 normal-case"
      size="large"
      variant="contained"
    />
  )
}
