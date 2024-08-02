import { observer } from "mobx-react-lite"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { useState } from "react"

import { Dish } from "app/data/dish.data"
import { Text } from "./Text"
import { Button } from "./Button"
import { colors } from "app/theme"
import { useStores } from "app/models"
import { ingredients } from "app/data/ingredients.data"
import { IngredientsModal } from "./IngredientsModal"
import { CartEntry } from "app/models/Cart"

type Props = {
  dish: Dish
}

const initIngredients = ingredients.map((ingr) => ({
  ...ingr,
  quantity: 0,
}))

export const DishCard = observer(function ({ dish }: Props) {
  const { cartStore } = useStores()
  const [ingredients, setIngredients] = useState(initIngredients)

  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const handleAddEntry = (entry: CartEntry) => {
    cartStore.addEntry(entry)
  }

  const handleClearIngredients = () => {
    setIngredients(initIngredients)
  }

  return (
    <View style={$cardContainer}>
      <Image src={dish.imageSrc} style={$image} resizeMode="cover" />
      <View style={$content}>
        <Text style={$dishName} preset="bold">
          {dish.name}
        </Text>
        <Text style={$description}>{dish.description}</Text>
        <View style={$row}>
          <Text style={$mass}>Вага: {dish.mass}</Text>
          <Button
            style={[$fixedButton, { borderColor: colors.palette.primary100, borderWidth: 1 }]}
            textStyle={[$fixedButtonContent, { color: colors.palette.primary100 }]}
            onPress={showModal}
          >
            Додати інгредієнти
          </Button>
        </View>
        <IngredientsModal
          hideModal={hideModal}
          addEntry={handleAddEntry}
          ingredients={ingredients}
          clearIngredients={handleClearIngredients}
          visible={visible}
          currentDish={dish}
          setIngredients={setIngredients}
        />
        <View style={[$row, { marginTop: 16 }]}>
          <Text style={$price}>{dish.price}₴</Text>
          <Button
            style={[$fixedButton, { backgroundColor: colors.palette.primary100 }]}
            textStyle={[$fixedButtonContent, { color: "white" }]}
            pressedStyle={[{ backgroundColor: colors.palette.primary300 }]}
            onPress={() => handleAddEntry({ ...dish, quantity: 1, selectedIngredients: [] })}
          >
            До кошика
          </Button>
        </View>
      </View>
    </View>
  )
})

const $cardContainer: ViewStyle = {
  borderRadius: 30,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: colors.palette.primary100,
  marginVertical: 12,
}

const $image: ImageStyle = {
  height: 260,
  width: "100%",
}

const $content: TextStyle = {
  paddingHorizontal: 16,
  paddingTop: 16,
  paddingBottom: 24,
}

const $dishName: TextStyle = {
  fontSize: 20,
}

const $description: TextStyle = {
  fontSize: 14,
  textAlign: "justify",
  lineHeight: 18.2,
  paddingVertical: 24,
  opacity: 0.7,
}

const $row: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $mass: TextStyle = {
  fontSize: 14,
}

const $price: TextStyle = {
  fontSize: 18,
  fontWeight: 700,
}

const $fixedButton: ViewStyle = {
  width: 200,
  paddingVertical: 12,
  borderRadius: 30,
  borderWidth: 0,
}

const $fixedButtonContent: TextStyle = {
  fontSize: 16,
  fontWeight: 700,
}
