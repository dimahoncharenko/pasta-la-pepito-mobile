import { useForm } from "react-hook-form"
import { FlatList } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import { menu } from "app/data/dish.data"
import { FilterButton } from "./FilterButton"
import { DishCard } from "./DishCard"

export const DishesDisplay = () => {
  const [dishes, setDishes] = useState(menu)

  const { control } = useForm({
    defaultValues: {
      sort: "",
      filter: "",
    },
  })

  useEffect(() => {
    if (!control._formValues.filter) {
      setDishes(() => menu)
    } else {
      setDishes(() => menu.filter((dish) => dish.category === control._formValues.filter))
    }
  }, [control._formValues.filter])

  return (
    <>
      <FilterButton control={control} />
      <SafeAreaView>
        <FlatList
          data={dishes}
          style={{
            marginBottom: 250,
          }}
          renderItem={({ item }) => <DishCard dish={item} />}
        />
      </SafeAreaView>
    </>
  )
}
