import { ViewStyle } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Dish } from "src/entities/dish/models/dish.types"
import { translate } from "src/shared/i18n"
import { colors } from "src/theme"
import { DishCard } from "../entities/dish/ui/dish-card"
import { AddIngredientButton } from "./AddIngredientButton"
import { AddToCartButton } from "./AddToCartButton"
import { Button } from "./Button"

type Props = {
  dishes: Dish[]
  containerStyle?: ViewStyle
  containerClassname?: string
  additionalState?: {
    canLoadMore: boolean
    setExpandedCount: React.Dispatch<React.SetStateAction<number>>
  }
}

export const DishesDisplay = ({
  dishes,
  containerStyle,
  additionalState,
  containerClassname,
}: Props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={dishes}
        style={containerStyle}
        className={containerClassname}
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
  )
}
