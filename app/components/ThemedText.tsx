import { TextStyle } from "react-native"
import { Text, useTheme } from "react-native-paper"

type Props = {
  children: React.ReactNode
  style?: TextStyle | TextStyle[]
  lightStyle?: TextStyle | TextStyle[]
  darkStyle?: TextStyle | TextStyle[]
}

export const ThemedText = ({ children, style, darkStyle, lightStyle }: Props) => {
  const { dark } = useTheme()

  return <Text style={[style, dark ? darkStyle : lightStyle]}>{children}</Text>
}
