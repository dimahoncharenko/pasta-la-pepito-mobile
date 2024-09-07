import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"

import { Button, Icon, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing, typography } from "app/theme"
import { DishesDisplay } from "app/components/DishesDisplay"
import { translate } from "app/i18n"
import { FilterButton } from "app/components/FilterButton"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"
import Config from "app/config"

export const MenuScreen: FC<TabScreenProps<"MenuList">> = observer((_props) => {
  const { menuStore } = useStores()
  const [expandedCount, setExpandedCount] = React.useState(1)

  const canLoadMore = menuStore.getFilteredEntries.length > expandedCount * Config.itemsPerScreen

  return (
    <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="bold" style={$heading}>
        <Icon icon="caretLeft" /> {translate("screenHeaders.menu")}
      </Text>
      <FilterButton />
      {canLoadMore && (
        <Button
          preset="simple"
          textStyle={{
            textAlign: "left",
            paddingHorizontal: 14,
            paddingVertical: 0,
            color: colors.palette.primary200,
          }}
          onPress={() => {
            setExpandedCount((prev) => prev + 1)
          }}
        >
          {translate("menuScreen.moreButton")}
        </Button>
      )}
      <DishesDisplay
        dishes={menuStore.getFilteredEntries.slice(0, expandedCount * Config.itemsPerScreen)}
        containerStyle={{
          marginBottom: canLoadMore ? 250 : 210,
        }}
      />
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
