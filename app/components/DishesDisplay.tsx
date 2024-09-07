import { FlatList } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"

import { DishCard } from "./DishCard"
import { Dish } from "app/data/dish.data"
import { ViewStyle } from "react-native"

type Props = {
  dishes: Dish[]
  containerStyle?: ViewStyle
}

export const DishesDisplay = ({ dishes, containerStyle }: Props) => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={dishes}
          style={containerStyle}
          renderItem={({ item }) => <DishCard dish={item} />}
        />
      </SafeAreaView>
    </>
  )
}
