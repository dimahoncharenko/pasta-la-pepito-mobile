import { Image } from "react-native"

export const Hero = () => {
  return (
    <Image
      source={require("../../../../assets/images/hero-sm.png")}
      style={{ width: "100%", height: 270 }}
    />
  )
}
