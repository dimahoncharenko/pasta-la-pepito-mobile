import { View, ViewStyle } from "react-native"
import { CartEntry as TCartEntry } from "src/models/Cart"
import { CartEntry } from "./CartEntry"
import { Text } from "./Text"

type Props = {
  entries: TCartEntry[]
}
export const CartList = ({ entries }: Props) => {
  return (
    <>
      <Text
        className="text-[18px] leading-[23.4px] font-interMedium mb-2"
        tx="cartScreen.summarySection.title"
      />
      <Text className="my-[20px] text-sm" tx="cartScreen.summarySection.subtitle" />
      <View style={$container}>
        {entries.map((entry, index) => (
          <CartEntry key={index} entry={entry} />
        ))}
      </View>
    </>
  )
}

const $container: ViewStyle = {
  display: "flex",
  gap: 16,
}
