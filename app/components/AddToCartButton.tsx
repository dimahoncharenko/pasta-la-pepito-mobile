import { TextStyle, ViewStyle } from "react-native"
import { Button } from "./Button"
import { colors } from "app/theme"
import { Dish } from "types/dish.types"
import { useStores } from "app/models"

type Props = {
  dish: Dish
  quantity: number
  selectedIngredients: []
}

export const AddToCartButton = ({ dish, quantity, selectedIngredients = [] }: Props) => {
  const { cartStore } = useStores()

  const handlePress = () => {
    cartStore.addEntry({ ...dish, quantity, selectedIngredients })
  }

  return (
    <Button onPress={handlePress} style={$btn} pressedStyle={$btnHover} textStyle={$btnText}>
      До кошика
    </Button>
  )
}

const $btn: ViewStyle = {
  backgroundColor: colors.palette.primary100,
  borderRadius: 30,
  paddingHorizontal: 40,
  paddingVertical: 12,
  borderWidth: 0,
}

const $btnHover: ViewStyle = {
  backgroundColor: colors.palette.primary200,
}

const $btnText: TextStyle = {
  color: "white",
  fontSize: 14,
}
