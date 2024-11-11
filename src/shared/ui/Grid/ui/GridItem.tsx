import { ReactNode } from "react"
import { View } from "react-native"

type Props = {
  cols: number
  children: ReactNode
}

export const GridItem = ({ cols, children }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        maxWidth: `${100 / cols}%`,
      }}
      className="max-h-fit"
    >
      {children}
    </View>
  )
}
