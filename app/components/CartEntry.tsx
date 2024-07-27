import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { Icon } from "./Icon"
import { Button } from "./Button"
import { Text } from "./Text"
import { colors } from "app/theme"
import { useStores } from "app/models"

type Props = {
  entry: {
    name: string
    imageSrc: string
    price: number
    quantity: number
  }
}
export const CartEntry = observer(({ entry }: Props) => {
  const { cartStore } = useStores()

  const handleChangeQuantity = (op: "DECREASE" | "INCREASE") => {
    if (op === "DECREASE") {
      cartStore.decreaseQuantity(entry.name)
    } else {
      cartStore.increaseQuantity(entry.name)
    }
  }

  const handleRemove = (name: string) => {
    cartStore.removeEntry(name)
  }

  return (
    <View>
      <View style={$row}>
        <Image style={$image} src={entry.imageSrc} alt={entry.name} />
        <Text style={$name} preset="bold">
          {entry.name}
        </Text>
      </View>
      <View style={[$row, $controllers]}>
        <Icon icon="trash" onPress={() => handleRemove(entry.name)} />
        <View style={$buttons}>
          <Button
            style={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={[
              $button,
              { lineHeight: Number($button.height), color: colors.palette.gray300 },
            ]}
            onPress={() => handleChangeQuantity("DECREASE")}
          >
            -
          </Button>
          <View style={$button}>
            <Text>{entry.quantity}</Text>
          </View>
          <Button
            style={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={[
              $button,
              { lineHeight: Number($button.height), color: colors.palette.gray300 },
            ]}
            onPress={() => handleChangeQuantity("INCREASE")}
          >
            +
          </Button>
        </View>
        <Text style={$price} preset="bold">
          {entry.price}₴
        </Text>
      </View>
    </View>
  )
})

const $row: ViewStyle = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  gap: 22,
}

const $image: ImageStyle = {
  width: 80,
  height: 80,
  borderRadius: 12,
}

const $name: TextStyle = {
  fontSize: 18,
  lineHeight: 23.4,
}

const $buttons: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}

const $button: ViewStyle = {
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.palette.gray100,
  alignItems: "center",
  borderRadius: 6,
  padding: 0,
  borderWidth: 1,
  borderColor: colors.palette.gray200,
}

const $controllers: ViewStyle = {
  alignItems: "center",
  borderBottomColor: colors.palette.primary100,
  borderBottomWidth: 1,
  paddingVertical: 16,
}

const $price: TextStyle = {
  fontSize: 20,
  lineHeight: 26,
}
