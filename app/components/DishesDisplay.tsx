import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

import { DishCard } from "./DishCard"
import { Dish } from "types/dish.types"
import { ViewStyle } from "react-native"
import { AddToCartButton } from "./AddToCartButton"
import { AddIngredientButton } from "./AddIngredientButton"
import { Button } from "./Button"
import { colors } from "app/theme"
import { translate } from "app/i18n"

type Props = {
  dishes: Dish[]
  containerStyle?: ViewStyle
  additionalState?: {
    canLoadMore: boolean
    setExpandedCount: React.Dispatch<React.SetStateAction<number>>
  }
}

export const DishesDisplay = ({ dishes, containerStyle, additionalState }: Props) => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={dishes}
          style={containerStyle}
          ListFooterComponent={
            additionalState?.canLoadMore ? (
              <Button
                preset="simple"
                textStyle={{
                  textAlign: "center",
                  paddingHorizontal: 14,
                  paddingVertical: 0,
                  marginTop: 0,
                  marginBottom: 24,
                  color: colors.palette.primary200,
                }}
                onPress={() => {
                  additionalState?.setExpandedCount((prev) => prev + 1)
                }}
              >
                {translate("menuScreen.moreButton")}
              </Button>
            ) : null
          }
          renderItem={({ item }) => (
            <DishCard
              dish={item}
              addToCartSlot={<AddToCartButton quantity={1} selectedIngredients={[]} dish={item} />}
              addIngredientSlot={
                <AddIngredientButton disabled={!item.customizable} dishId={item.id} />
              }
            />
          )}
        />
      </SafeAreaView>
    </>
  )
}
