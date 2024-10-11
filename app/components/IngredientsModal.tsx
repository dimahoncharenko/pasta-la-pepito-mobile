import { Image, ImageStyle, ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Modal, Portal } from "react-native-paper"
import { useMemo, useState } from "react"

import { Button } from "./Button"
import { Icon } from "./Icon"
import { Text } from "./Text"
import { colors, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"
import { initIngredients } from "app/helpers/ingredients-modal.helpers"

export const IngredientsModal = observer(() => {
  const { ingredientsStore, menuStore } = useStores()

  const [ingredients, setIngredients] = useState<{
    [P: string]: {
      count: number
      price: number
    }
  }>(initIngredients(ingredientsStore.getEntries || []))

  const handleAdd = () => {
    handleClear()
    menuStore.setViewingDish(null)
  }

  const extraCost = useMemo(() => {
    let cost = 0
    for (const name in ingredients) {
      cost += (ingredients[name].count || 0) * (ingredients[name].price || 0)
    }

    return cost
  }, [ingredients])

  const handleClear = () => {
    setIngredients(initIngredients(ingredientsStore.getEntries))
  }

  const handleChangeQuantity = (action: "DECREASE" | "INCREASE", ingredient: string) => {
    setIngredients((prev) => ({
      ...prev,
      [ingredient]: {
        count:
          action === "DECREASE"
            ? Math.max(prev[ingredient].count - 1, 0)
            : prev[ingredient].count + 1,
        price: prev[ingredient].price,
      },
    }))
  }

  if (!ingredientsStore.getEntries.length) return null

  const viewingDish = menuStore.getAllEntries.find((dish) => dish.id === menuStore.viewingDish)

  return (
    <Portal>
      <Modal visible={menuStore.isViewing} onDismiss={() => menuStore.setViewingDish(null)}>
        {viewingDish && (
          <ScrollView scrollEnabled contentContainerStyle={$modalContainer}>
            <Button
              onPress={() => menuStore.setViewingDish(null)}
              style={{
                marginLeft: "auto",
                backgroundColor: "transparent",
                borderWidth: 0,
              }}
            >
              <Icon icon="x" size={32} color={colors.palette.gray400} />
            </Button>
            <View style={$grid}>
              {ingredientsStore.getEntries.map((ingr, index) => {
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
                      <Image
                        src={ingr.image || "https://placehold.co/600x400.png"}
                        alt={ingr.name}
                        style={$ingredientImage}
                      />
                      <View>
                        <Text style={$ingredientText}>100 г</Text>
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
                        onPress={() => handleChangeQuantity("DECREASE", ingr.name)}
                      >
                        -
                      </Button>
                      <View style={$button}>
                        <Text style={$quantity}>{ingredients[ingr.name].count}</Text>
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
                        onPress={() => handleChangeQuantity("INCREASE", ingr.name)}
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
                <Text style={$ingredentsDishName}>{viewingDish.title}</Text>
                <Text style={$ingredientsDishPrice}>{viewingDish.price + extraCost}₴</Text>
              </View>
              <Image
                src={viewingDish.image || "https://placehold.co/600x400.png"}
                alt={viewingDish.title}
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
              onPress={handleClear}
              tx={"common.clearButton"}
            />
            <Button
              style={[$fixedButton, { backgroundColor: colors.palette.primary100, width: "100%" }]}
              textStyle={[$fixedButtonContent, { color: "white" }]}
              pressedStyle={[{ backgroundColor: colors.palette.primary300 }]}
              onPress={handleAdd}
              tx={"common.cartButton"}
            />
          </ScrollView>
        )}
      </Modal>
    </Portal>
  )
})

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
