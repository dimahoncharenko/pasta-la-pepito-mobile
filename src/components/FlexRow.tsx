import { ViewStyle, View } from "react-native"

type Props = {
  children: React.ReactNode
  style?: ViewStyle
}

export const FlexRow = ({ children, style }: Props) => {
  return (
    <View style={[{ display: "flex", alignItems: "center", gap: 16, flexDirection: "row" }, style]}>
      {children}
    </View>
  )
}
