import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"

import { Icon, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing, typography } from "app/theme"
import { DishesDisplay } from "app/components/DishesDisplay"

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"DemoPodcastList">> =
  function DemoPodcastListScreen(_props) {
    return (
      <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="bold" style={$heading}>
          <Icon icon="caretLeft" /> Наше меню
        </Text>
        <DishesDisplay />
      </Screen>
    )
  }

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
