import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Icon, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing, typography } from "../theme"

import { CartList } from "app/components/CartList"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"

export const CartScreen: FC<DemoTabScreenProps<"CartScreen">> = observer(function (_props) {
  const { cartStore } = useStores()

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="bold" style={$heading}>
        <Icon icon="caretLeft" /> Корзина
      </Text>
      <CartList />
      <View>
        <Text>Товарів на суму:</Text>
        <Text>{cartStore.getTotalPrice.toFixed(2)}</Text>
      </View>
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
