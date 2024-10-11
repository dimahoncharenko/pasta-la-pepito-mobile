import { Text } from "app/components"
import { HorizontalDishCard } from "app/components/HorizontalDishCard"
import { dishApi } from "app/services/api"
import { useEffect, useState } from "react"
import { View } from "react-native"
import { Dish } from "types/dish.types"

export const NewDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await dishApi.getNewDishes()
      if (response.kind === "ok") {
        setDishes(response.hits)
      } else {
        console.error("Failed to fetch new dishes:", response)
      }
    })()
  }, [])

  return (
    <View className="p-6">
      <Text
        preset="subheading"
        tx="homeScreen.newDishes.title"
        className="text-[28px] mt-4 text-center"
      />
      {dishes.map((dish) => (
        <HorizontalDishCard key={dish.id} dish={dish} />
      ))}
    </View>
  )
}
