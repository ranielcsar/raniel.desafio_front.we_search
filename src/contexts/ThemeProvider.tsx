import { ThemeProvider as Provider, createTheme } from "@mui/material"
import { PropsWithChildren } from "react"

const theme = createTheme({
  palette: {
    primary: {
      main: "#5d00bf",
    },
  },
})

export function ThemeProvider({ children }: PropsWithChildren<any>) {
  return <Provider theme={theme}>{children}</Provider>
}
