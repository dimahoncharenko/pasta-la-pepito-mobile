import { DishesDisplay } from "app/components/DishesDisplay"
import { FilterButton } from "app/components/FilterButton"
import { IngredientsModal } from "app/components/IngredientsModal"
import Config from "app/config"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { dishApi } from "app/services/api"
import { spacing, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Icon, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/BottomNavigator"

export const MenuScreen: FC<TabScreenProps<"MenuList">> = observer((_props) => {
  const { menuStore, ingredientsStore } = useStores()
  const [expandedCount, setExpandedCount] = React.useState(1)

  useEffect(() => {
    ;(async () => {
      try {
        const dishes = await dishApi.getDishes()
        dishes.kind === "ok" && menuStore.setProp("entries", dishes.dishes)
        dishes.kind === "ok" && menuStore.setProp("filtered", dishes.dishes)
        dishes.kind === "ok" && menuStore.setProp("selectedCategory", "All")
      } catch (err) {
        console.error("Error fetching dishes:", err)
      }
    })()
  }, [])

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

  const canLoadMore = menuStore.getFilteredEntries.length > expandedCount * Config.itemsPerScreen

  return (
    <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="bold" style={$heading}>
        <Icon icon="caretLeft" /> {translate("screenHeaders.menu")}
      </Text>
      <FilterButton />
      <DishesDisplay
        dishes={menuStore.getFilteredEntries.slice(0, expandedCount * Config.itemsPerScreen)}
        additionalState={{
          canLoadMore,
          setExpandedCount,
        }}
        containerStyle={{
          marginBottom: canLoadMore ? 250 : 210,
        }}
      />
      <IngredientsModal />
    </Screen>
  )
})

const $heading: TextStyle = {
  fontSize: 28,
  lineHeight: 36.4,
  fontFamily: typography.fonts.alegreyaSC.medium,
  textAlign: "center",
  paddingBottom: 16,
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
