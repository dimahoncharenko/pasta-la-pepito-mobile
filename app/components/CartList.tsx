import { View, ViewStyle } from "react-native"

import { CartEntry } from "./CartEntry"
import { Dish } from "app/data/dish.data"

type Props = {
  entries: ({ quantity: number } & Dish)[]
}
export const CartList = ({ entries }: Props) => {
  return (
    <View style={$container}>
      {entries.map((entry, index) => (
        <CartEntry key={index} entry={entry} />
      ))}
    </View>
  )
}

const $container: ViewStyle = {
  display: "flex",
  gap: 16,
}
