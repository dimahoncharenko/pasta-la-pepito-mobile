import { useEffect, useState } from "react"
import { View } from "react-native"
import { dishApi } from "src/entities/dish/api/dishApi"
import { Dish } from "src/entities/dish/models/dish.types"
import { HorizontalDishCard } from "src/entities/dish/ui/dish-card-horizontal"
import { useStores } from "src/models"
import { SectionHeading } from "src/shared/ui/SectionHeading"

export const NewDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([])
  const { ingredientsStore } = useStores()

  useEffect(() => {
    if (ingredientsStore.getEntries.length > 0) return
    ;(async () => {
      try {
        await ingredientsStore.loadIngredients()
      } catch (err) {
        console.error("Error fetching ingredients:", err)
      }
    })()
  }, [ingredientsStore.getEntries])

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
      <SectionHeading tx="homeScreen.newDishes.title" />
      {dishes.map((dish) => (
        <HorizontalDishCard key={dish.id} dish={dish} />
      ))}
    </View>
  )
}
