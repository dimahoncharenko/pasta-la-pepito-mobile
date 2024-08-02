import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { Icon } from "./Icon"
import { Button } from "./Button"
import { Text } from "./Text"
import { colors, typography } from "app/theme"
import { useStores } from "app/models"

type Props = {
  entry: {
    name: string
    imageSrc: string
    price: number
    quantity: number
    selectedIngredients: {
      name: string
      mass: number
      price: number
      imageSrc: any
    }[]
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
        <View>
          <Text style={$name} preset="bold">
            {entry.name}
          </Text>
          {entry.selectedIngredients && entry.selectedIngredients.length > 0 && (
            <>
              <Text style={{ fontSize: 14, fontWeight: 700 }}>Додатково обрано:</Text>
              <Text
                style={{
                  maxWidth: "90%",
                  fontSize: 12,
                  lineHeight: 14,
                }}
              >
                {entry.selectedIngredients.reduce(
                  (acc, curr) => (!acc ? curr.name : acc + ", " + curr.name),
                  "",
                )}
              </Text>
            </>
          )}
        </View>
      </View>
      <View style={[$row, $controllers]}>
        <Icon
          icon="trash"
          color={colors.palette.gray300}
          onPress={() => handleRemove(entry.name)}
        />
        <View style={$buttons}>
          <Button
            style={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={[
              $button,
              { lineHeight: Number($button.height), color: colors.palette.gray400, fontSize: 20 },
            ]}
            onPress={() => handleChangeQuantity("DECREASE")}
          >
            -
          </Button>
          <View style={$button}>
            <Text style={$quantity}>{entry.quantity}</Text>
          </View>
          <Button
            style={{ backgroundColor: "transparent", borderWidth: 0 }}
            textStyle={[
              $button,
              { lineHeight: Number($button.height), color: colors.palette.gray400, fontSize: 20 },
            ]}
            onPress={() => handleChangeQuantity("INCREASE")}
          >
            +
          </Button>
        </View>
        <Text style={$price}>{entry.price.toFixed(2)}₴</Text>
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
  fontFamily: typography.fonts.inter.medium,
}

const $quantity: TextStyle = {
  fontSize: 18,
  lineHeight: 23,
}
