import { useForm } from "react-hook-form"
import { FlatList } from "react-native-gesture-handler"
import { useLayoutEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

import { menu } from "app/data/dish.data"
import { FilterButton } from "./FilterButton"
import { DishCard } from "./DishCard"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"

export const DishesDisplay = observer(() => {
  const { menuStore } = useStores()

  return (
    <>
      <FilterButton />
      <SafeAreaView>
        <FlatList
          data={menuStore.getFilteredEntries}
          style={{
            marginBottom: 250,
          }}
          renderItem={({ item }) => <DishCard dish={item} />}
        />
      </SafeAreaView>
    </>
  )
})
