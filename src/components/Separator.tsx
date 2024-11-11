import { View, ViewProps, ViewStyle } from "react-native"
import { colors, spacing } from "src/theme"

type Props = {
  style?: ViewStyle
} & ViewProps
export const Separator = ({ style, ...rest }: Props) => {
  return <View {...rest} style={[$separator, style]} />
}

const $separator: ViewStyle = {
  height: 1,
  backgroundColor: colors.palette.primary100,
  marginVertical: spacing.sm,
}
