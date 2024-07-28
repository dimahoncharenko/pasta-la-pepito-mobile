import { observer } from "mobx-react-lite"
import { Image, ImageStyle, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Modal, Portal } from "react-native-paper"
import { useState } from "react"

import { Dish } from "app/data/dish.data"
import { Text } from "./Text"
import { Button } from "./Button"
import { colors, typography } from "app/theme"
import { useStores } from "app/models"
import { ingredients } from "app/data/ingredients.data"
import { Icon } from "./Icon"

type Props = {
  dish: Dish
}

export const DishCard = observer(function ({ dish }: Props) {
  const { cartStore } = useStores()

  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const handleAddEntry = (entry: Dish) => {
    cartStore.addEntry({ ...entry, quantity: 1 })
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
                        >
                          -
                        </Button>
                        <View style={$button}>
                          <Text style={$quantity}>0</Text>
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
                  <Text style={$ingredentsDishName}>{dish.name}</Text>
                  <Text style={$ingredientsDishPrice}>{dish.price}₴</Text>
                </View>
                <Image
                  src={dish.imageSrc}
                  alt={dish.name}
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
              >
                Очистити
              </Button>
              <Button
                style={[
                  $fixedButton,
                  { backgroundColor: colors.palette.primary100, width: "100%" },
                ]}
                textStyle={[$fixedButtonContent, { color: "white" }]}
                pressedStyle={[{ backgroundColor: colors.palette.primary300 }]}
              >
                До кошика
              </Button>
            </ScrollView>
          </Modal>
        </Portal>
        <View style={[$row, { marginTop: 16 }]}>
          <Text style={$price}>{dish.price}₴</Text>
          <Button
            style={[$fixedButton, { backgroundColor: colors.palette.primary100 }]}
            textStyle={[$fixedButtonContent, { color: "white" }]}
            pressedStyle={[{ backgroundColor: colors.palette.primary300 }]}
            onPress={() => handleAddEntry(dish)}
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
