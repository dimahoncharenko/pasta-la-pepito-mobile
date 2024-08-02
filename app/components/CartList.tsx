import { TextStyle, View, ViewStyle } from "react-native"

import { CartEntry } from "./CartEntry"
import { Text } from "./Text"
import { typography } from "app/theme"
import { CartEntry as TCartEntry } from "app/models/Cart"

type Props = {
  entries: TCartEntry[]
}
export const CartList = ({ entries }: Props) => {
  return (
    <>
      <Text style={$title}>Ваше замовлення</Text>
      <Text style={$subtitle}>Мінімальна сума для безкоштовної доставки 700 грн</Text>
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

const $title: TextStyle = {
  fontSize: 18,
  fontFamily: typography.fonts.inter.medium,
  marginBottom: 8,
}

const $subtitle: TextStyle = {
  fontSize: 14,
  marginVertical: 20,
}
