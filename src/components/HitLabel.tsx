import { Image, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "./Text"

export const HitLabel = () => {
  return (
    <View style={$containerStyles}>
      <Image src={""} alt="hit image" />
      <Text style={$labelStyles}>Хіт</Text>
    </View>
  )
}

const $containerStyles: ViewStyle = {
  position: "absolute",
  left: 16,
  top: 16,
  display: "flex",
  flexDirection: "row",
  width: 68,
  height: 68,
  alignItems: "center",
  justifyContent: "center",
  transform: "rotateZ(15deg)",
}

const $labelStyles: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: "Inter_500Medium",
  color: "#FFFFFF",
  borderRadius: 8,
  zIndex: 10,
  textTransform: "uppercase",
}
