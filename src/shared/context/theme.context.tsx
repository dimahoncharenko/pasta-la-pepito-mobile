import { createContext, useState } from "react"
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper"

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brandBgLight: "#FAFAFA",
    brandBgDark: "#181818",
    brandPrimary: "#056B79",
    brandDarkPrimary: "#151718",
    brandSecondary: "#1c1b1f",
    brandSecondaryDark: "#F7F7F7",
    brandDarkHighlight: "#ffd014",
  },
}

type Context = {
  theme: typeof defaultTheme
  setTheme: React.Dispatch<React.SetStateAction<typeof defaultTheme>>
}

export const themeContext = createContext<Context>({} as Context)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </themeContext.Provider>
  )
}
