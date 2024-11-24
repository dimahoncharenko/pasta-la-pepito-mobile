import { ViewStyle } from "react-native"
import { Dish } from "src/entities/dish/models/dish.types"
import { useStores } from "src/models"
import { colors } from "src/theme"
import { Button } from "../../../components/Button"

type Props = {
  dish: Dish
  quantity: number
  selectedIngredients: []
}

export const AddToCartButton = ({ dish, quantity, selectedIngredients = [] }: Props) => {
  const { cartStore } = useStores()

  const handlePress = () => {
    cartStore.addEntry({
      category: { id: dish.category.id, name: dish.category.name },
      composition: dish.composition,
      customizable: dish.customizable,
      id: dish.id,
      image: dish.image,
      isNew: dish.isNew,
      orderCount: dish.orderCount,
      price: dish.price,
      title: dish.title,
      slug: dish.slug,
      volume: dish.volume,
      weight: dish.weight,
      quantity,
      selectedIngredients,
    })
  }

  return (
    <Button
      onPress={handlePress}
      className="bg-primary-light rounded-enormous py-[13px] w-48"
      textClassname="text-white text-base leading-[20.8px] font-interMedium text-center"
      pressedStyle={$btnHover}
    >
      До кошика
    </Button>
  )
}

const $btnHover: ViewStyle = {
  backgroundColor: colors.palette.primary300,
}
