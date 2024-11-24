import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { dishApi } from "src/entities/dish/api/dishApi"
import { FilterButton } from "src/features/filter-button"
import { useStores } from "src/models"
import { TabScreenProps } from "src/screens/HomeScreen"
import Config from "src/shared/config"
import { translate } from "src/shared/i18n"
import { SectionHeading } from "src/shared/ui/SectionHeading"
import { DishesList } from "src/widgets/dishes-list"
import { Screen, Text } from "../../../components"

export const MenuScreen: FC<TabScreenProps<"MenuList">> = observer((_props) => {
  const { menuStore } = useStores()
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

  const canLoadMore = menuStore.getFilteredEntries.length > expandedCount * Config.itemsPerScreen

  return (
    <Screen
      preset="fixed"
      className="mt-10"
      contentContainerClassname="px-4"
      safeAreaEdges={["top"]}
    >
      <SectionHeading
        children={<Text className="font-alegreyaSCMedium">{translate("screenHeaders.menu")}</Text>}
      />
      <FilterButton />
      <DishesList
        dishes={menuStore.getFilteredEntries.slice(0, expandedCount * Config.itemsPerScreen)}
        additionalState={{
          canLoadMore,
          setExpandedCount,
        }}
        containerClassname="mb-[165px]"
      />
    </Screen>
  )
})
