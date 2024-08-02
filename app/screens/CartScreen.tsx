import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useForm } from "react-hook-form"
import React, { FC } from "react"

import { Button, EmptyState, Icon, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing, typography } from "../theme"

import { CartList } from "app/components/CartList"
import { CartBilling } from "app/components/CartBilling"
import { useStores } from "app/models"
import { DeliveryMethods } from "app/components/DeliveryMethods"

export const CartScreen: FC<DemoTabScreenProps<"CartScreen">> = observer(function (_props) {
  const { cartStore } = useStores()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: "",
      street: "",
      houseNumber: "",
      entrance: "",
      appartmentNumber: "",
      score: "",
      code: "",
    },
  })

  const handleSubmitForm = (data: typeof control._formValues) => {
    console.log("Submitted: ", data)
  }

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
      <DeliveryMethods control={control} errors={errors} />

      <CartList entries={cartStore.getAllEntries} />
      <CartBilling totalPrice={cartStore.getTotalPrice} />
      <Button
        style={$orderButton}
        pressedStyle={$orderButtonHover}
        onPress={handleSubmit(handleSubmitForm)}
        textStyle={{ color: "white" }}
      >
        Оформити замовлення
      </Button>
      <Button style={$returnButton} textStyle={{ color: colors.palette.primary100 }}>
        Повернутись до меню
      </Button>
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

const $button: ViewStyle = {
  borderRadius: 30,
  paddingVertical: 12,
}

const $orderButton: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.primary100,
  borderWidth: 0,
}

const $orderButtonHover: ViewStyle = {
  backgroundColor: colors.palette.primary200,
}

const $returnButton: ViewStyle = {
  ...$button,
  borderColor: colors.palette.primary100,
  marginVertical: spacing.xl,
}
