import { observer } from "mobx-react-lite"
import { useMemo, useState } from "react"
import { Image, ScrollView, View } from "react-native"
import { Modal, Portal } from "react-native-paper"
import { useStores } from "src/models"
import { initIngredients } from "src/shared/helpers/ingredients-modal.helpers"
import { FilledButton } from "src/shared/ui/FilledButton"
import { OutlinedButton } from "src/shared/ui/OutlinedButton"
import { colors } from "src/theme"
import { Button } from "../../../components/Button"
import { Icon } from "../../../components/Icon"
import { Text } from "../../../components/Text"

export const IngredientsModal = observer(() => {
  const { ingredientsStore, menuStore, cartStore } = useStores()

  const [ingredients, setIngredients] = useState<{
    [P: string]: {
      id: number
      quantity: number
      price: number
      name: string
      image: string | null
    }
  }>(initIngredients(ingredientsStore.getEntries || []))

  const handleAdd = () => {
    const viewedId = menuStore.viewingDish
    const viewingDish = Object.create(menuStore.getEntryById(viewedId!) || null)

    if (viewingDish) {
      console.log({
        ...viewingDish,
        quantity: 1,
        selectedIngredients: Object.values(ingredients)
          .filter((ingr) => ingr.quantity > 0)
          .map((ingr) => ({
            id: ingr.id,
            name: ingr.name,
            price: ingr.price,
            quantity: ingr.quantity,
          })),
      })

      cartStore.addEntry({
        category: { id: viewingDish.category.id, name: viewingDish.category.name },
        composition: viewingDish.composition,
        customizable: viewingDish.customizable,
        id: viewingDish.id,
        image: viewingDish.image,
        isNew: viewingDish.isNew,
        orderCount: viewingDish.orderCount,
        price: viewingDish.price,
        title: viewingDish.title,
        quantity: 1,
        slug: viewingDish.slug,
        volume: viewingDish.volume,
        weight: viewingDish.weight,
        selectedIngredients: Object.values(ingredients)
          .filter((ingr) => ingr.quantity > 0)
          .map((ingr) => ({
            id: ingr.id,
            name: ingr.name,
            price: ingr.price,
            quantity: ingr.quantity,
            image: ingr.image,
          })),
      })

      handleClear()
      menuStore.setViewingDish(null)
    }
  }

  const extraCost = useMemo(() => {
    let cost = 0
    for (const name in ingredients) {
      cost += (ingredients[name].quantity || 0) * (ingredients[name].price || 0)
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
        id: prev[ingredient].id,
        image: prev[ingredient].image,
        name: prev[ingredient].name,
        quantity:
          action === "DECREASE"
            ? Math.max(prev[ingredient].quantity - 1, 0)
            : prev[ingredient].quantity + 1,
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
          <ScrollView scrollEnabled className="bg-gray-100 px-6">
            <Button onPress={() => menuStore.setViewingDish(null)} className="ml-auto border-0">
              <Icon icon="x" size={32} color={colors.palette.gray400} />
            </Button>
            <View className="flex-row py-4 w-full flex-wrap justify-center gap-[15px]">
              {ingredientsStore.getEntries.map((ingr, index) => {
                return (
                  <View
                    key={index}
                    className="bg-white p-1 basis-[45%] rounded-[8px] flex-col items-center"
                  >
                    <Text className="font-interBold text-sm leading-[18.2px] capitalize p-2 text-center">
                      {ingr.name}
                    </Text>

                    <Image
                      source={{ uri: ingr.image || "https://placehold.co/600x400.png" }}
                      alt={ingr.name}
                      className="w-[80px] h-[80px] rounded-[6px]"
                    />
                    <View className="flex-row justify-center py-2">
                      <Text className="text-xs">{ingr.price}₴ / </Text>
                      <Text className="text-xs">100 г</Text>
                    </View>

                    <View className="flex-row gap-2 pb-2">
                      <Button
                        className="border bg-gray-100 rounded-[6px] border-gray-200 h-8 w-8 justify-center items-center"
                        textClassname="text-gray-400 text-xl"
                        disabled={!ingredients[ingr.name].quantity}
                        disabledTextStyle={{ color: colors.palette.gray200 }}
                        onPress={() => handleChangeQuantity("DECREASE", ingr.name)}
                      >
                        -
                      </Button>
                      <View className="border bg-gray-100 rounded-[6px] border-gray-200 h-8 w-8 justify-center items-center">
                        <Text className="font-interMedium text-xl leading-[26px]">
                          {ingredients[ingr.name].quantity}
                        </Text>
                      </View>
                      <Button
                        className="border bg-gray-100 rounded-[6px] border-gray-200 h-8 w-8 justify-center items-center"
                        textClassname="text-gray-400 text-xl"
                        onPress={() => handleChangeQuantity("INCREASE", ingr.name)}
                      >
                        +
                      </Button>
                    </View>
                  </View>
                )
              })}
            </View>
            <View className="flex-row justify-between items-center border-t-primary-100 border-t py-4">
              <View>
                <Text className="text-lg font-interMedium max-w-[180px] leading-[23.4px]">
                  {viewingDish.title}
                </Text>
                <Text className="text-[26px] leading-[31.47px] font-interMedium">
                  {viewingDish.price + extraCost}₴
                </Text>
              </View>
              <Image
                source={{ uri: viewingDish.image || "https://placehold.co/600x400.png" }}
                alt={viewingDish.title}
                className="h-[104px] aspect-square rounded-[8px]"
                resizeMode="cover"
              />
            </View>
            <OutlinedButton onPress={handleClear} tx={"common.clearButton"} />
            <FilledButton onPress={handleAdd} tx={"common.cartButton"} />
          </ScrollView>
        )}
      </Modal>
    </Portal>
  )
})
