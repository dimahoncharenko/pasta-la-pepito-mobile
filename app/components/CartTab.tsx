import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "./Text"
import { useStores } from "app/models"

export const CartTab = observer(function () {
  const { cartStore } = useStores()

  if (!cartStore.getEntriesCount) return

  return (
    <View
      style={{
        backgroundColor: colors.main,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: -5,
        right: -10,
        borderRadius: 1000000,
        width: 20,
        height: 20,
      }}
    >
      <Text style={{ fontSize: 12, color: "white", fontWeight: 700, marginTop: -2 }}>
        {cartStore.getEntriesCount}
      </Text>
    </View>
  )
})
