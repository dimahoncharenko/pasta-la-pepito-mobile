import { Image, ImageStyle, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Modal, Portal } from "react-native-paper"
import { Dispatch } from "react"

import { Button } from "./Button"
import { Icon } from "./Icon"
import { Text } from "./Text"
import { colors, typography } from "app/theme"
import { Dish } from "app/data/dish.data"

type Props = {
  ingredients: {
    name: string
    mass: number
    price: number
    imageSrc: any
    quantity: number
  }[]
  clearIngredients: () => void
  hideModal: () => void
  visible: boolean
  currentDish: Dish
  setIngredients: Dispatch<
    React.SetStateAction<
      {
        quantity: number
        name: string
        mass: number
        price: number
        imageSrc: any
      }[]
    >
  >
}

export const IngredientsModal = ({
  hideModal,
  ingredients,
  setIngredients,
  visible,
  currentDish,
  clearIngredients,
}: Props) => {
  const increaseQuantity = (name: string) => {
    const updatedIngredients = ingredients.map((ingr) => {
      if (ingr.name === name) {
        console.log("Triggered", ingr.quantity)
        return {
          ...ingr,
          quantity: ingr.quantity + 1,
        }
      }
      return ingr
    })
    setIngredients(updatedIngredients)
  }

  const decreaseQuantity = (name: string) => {
    const updatedIngredients = ingredients.map((ingr) => {
      if (ingr.name === name && ingr.quantity > 0) {
        return {
          ...ingr,
          quantity: ingr.quantity - 1,
        }
      }
      return ingr
    })
    setIngredients(updatedIngredients)
  }

  const handleAdd = () => {
    const selectedIngredients = ingredients.filter((ingr) => ingr.quantity > 0)
    const entry = {
      ...currentDish,
      selectedIngredients,
    }

    console.log(entry)
  }

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal}>
        <ScrollView scrollEnabled contentContainerStyle={$modalContainer}>
          <Button
            onPress={hideModal}
            style={{
              marginLeft: "auto",
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
          >
            <Icon icon="x" size={32} color={colors.palette.gray400} />
          </Button>
          <View style={$grid}>
            {ingredients.map((ingr, index) => {
              return (
                <View key={index} style={$ingredient}>
                  <Text style={$ingredientTitle}>{ingr.name}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 6,
                    }}
                  >
                    <Image source={ingr.imageSrc} style={$ingredientImage} />
                    <View>
                      <Text style={$ingredientText}>{ingr.mass} г</Text>
                      <Text style={$ingredientText}>0 x {ingr.price}₴</Text>
                    </View>
                  </View>
                  <View style={$buttons}>
                    <Button
                      style={{ backgroundColor: "transparent", borderWidth: 0 }}
                      textStyle={[
                        $button,
                        {
                          lineHeight: Number($button.height),
                          color: colors.palette.gray400,
                          fontSize: 20,
                        },
                      ]}
                      onPress={() => decreaseQuantity(ingr.name)}
                    >
                      -
                    </Button>
                    <View style={$button}>
                      <Text style={$quantity}>{ingr.quantity}</Text>
                    </View>
                    <Button
                      style={{ backgroundColor: "transparent", borderWidth: 0 }}
                      textStyle={[
                        $button,
                        {
                          lineHeight: Number($button.height),
                          color: colors.palette.gray400,
                          fontSize: 20,
                        },
                      ]}
                      onPress={() => increaseQuantity(ingr.name)}
                    >
                      +
                    </Button>
                  </View>
                </View>
              )
            })}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopColor: colors.palette.primary100,
              borderTopWidth: 1,

              paddingVertical: 16,
            }}
          >
            <View>
              <Text style={$ingredentsDishName}>{currentDish.name}</Text>
              <Text style={$ingredientsDishPrice}>{currentDish.price}₴</Text>
            </View>
            <Image
              src={currentDish.imageSrc}
              alt={currentDish.name}
              style={$ingredintsDishImage}
              resizeMode="cover"
            />
          </View>
          <Button
            style={[
              $fixedButton,
              {
                borderColor: colors.palette.primary100,
                borderWidth: 1,
                width: "100%",
                marginBottom: 24,
              },
            ]}
            textStyle={[$fixedButtonContent, { color: colors.palette.primary100 }]}
            onPress={clearIngredients}
          >
            Очистити
          </Button>
          <Button
            style={[$fixedButton, { backgroundColor: colors.palette.primary100, width: "100%" }]}
            textStyle={[$fixedButtonContent, { color: "white" }]}
            pressedStyle={[{ backgroundColor: colors.palette.primary300 }]}
            onPress={handleAdd}
          >
            До кошика
          </Button>
        </ScrollView>
      </Modal>
    </Portal>
  )
}

const $modalContainer: ViewStyle = {
  backgroundColor: colors.palette.gray100,
  padding: 24,
}

const $grid: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  columnGap: 32,
  rowGap: 16,
}

const $ingredient: ViewStyle = {
  backgroundColor: "white",
  padding: 4,
  flexBasis: "44%",
  borderRadius: 8,
}

const $ingredientImage: ImageStyle = {
  width: 64,
  height: 64,
  backgroundColor: "#DFE7E8",
  borderRadius: 6,
}

const $ingredientTitle: TextStyle = {
  fontSize: 14,
  fontFamily: typography.fonts.inter.bold,
  marginBottom: 8,
  lineHeight: 18.2,
}

const $ingredientText: TextStyle = {
  fontSize: 12,
  lineHeight: 15.6,
}

const $buttons: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  marginLeft: -8,
}

const $button: ViewStyle = {
  width: 32,
  height: 32,
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.palette.gray100,
  alignItems: "center",
  borderRadius: 6,
  padding: 0,
  borderWidth: 1,
  borderColor: colors.palette.gray200,
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

const $quantity: TextStyle = {
  fontSize: 18,
  lineHeight: 23,
}

const $ingredintsDishImage: ImageStyle = { height: 105, aspectRatio: "1/1", borderRadius: 8 }

const $ingredentsDishName: TextStyle = {
  fontSize: 18,
  fontFamily: typography.fonts.inter.medium,
  lineHeight: 23.4,
  maxWidth: 160,
}

const $ingredientsDishPrice: TextStyle = {
  fontSize: 26,
  fontFamily: typography.fonts.inter.medium,
  lineHeight: 31.47,
}
