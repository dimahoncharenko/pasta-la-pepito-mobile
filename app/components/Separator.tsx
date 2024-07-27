import { colors, spacing } from "app/theme"
import { View, ViewStyle } from "react-native"

type Props = {
  style?: ViewStyle
}
export const Separator = ({ style }: Props) => {
  return <View style={[$separator, style]} />
}

const $separator: ViewStyle = {
  height: 1,
  backgroundColor: colors.palette.primary100,
  marginVertical: spacing.sm,
}
