import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { EmptyState, Icon, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing, typography } from "../theme"

import { CartList } from "app/components/CartList"
import { CartBilling } from "app/components/CartBilling"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"
import { DeliveryMethods } from "app/components/DeliveryMethods"

export const CartScreen: FC<DemoTabScreenProps<"CartScreen">> = observer(function (_props) {
  const { cartStore } = useStores()

  if (!cartStore.getEntriesCount)
    return (
      <View style={$emptyContainer}>
        <EmptyState
          preset="generic"
          heading="Кошик пустий."
          content="Твій кошик просто плаче від самотності. Закинь туди щось путнє!"
          ButtonProps={{ style: { display: "none" } }}
        />
      </View>
    )

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="bold" style={$heading}>
        <Icon icon="caretLeft" /> Кошик
      </Text>
      <DeliveryMethods />
      {/* @ts-ignore */}
      <CartList entries={cartStore.entries} />
      <CartBilling totalPrice={cartStore.getTotalPrice} />
    </Screen>
  )
})

const $heading: TextStyle = {
  fontSize: 28,
  lineHeight: 36.4,
  fontFamily: typography.fonts.alegreyaSC.medium,
  textAlign: "center",
}

const $emptyContainer: ViewStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
