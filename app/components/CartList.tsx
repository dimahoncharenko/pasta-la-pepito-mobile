import { useStores } from "app/models"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"

import { CartEntry } from "./CartEntry"

export const CartList = observer(() => {
  const { cartStore } = useStores()

  return (
    <View style={$container}>
      {cartStore.entries.map((entry, index) => (
        <CartEntry key={index} entry={entry} />
      ))}
    </View>
  )
})

const $container: ViewStyle = {
  display: "flex",
  gap: 16,
}
