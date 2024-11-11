import { View, ViewProps } from "react-native"
import { useTheme } from "react-native-paper"

type Props = {
  children: React.ReactNode
  style?: ViewProps["style"]
  darkStyle?: ViewProps["style"]
  lightStyle?: ViewProps["style"]
}

export const ThemedView = ({ children, darkStyle, lightStyle, style }: Props) => {
  const { dark } = useTheme()

  return <View style={[style, dark ? darkStyle : lightStyle]}>{children}</View>
}
