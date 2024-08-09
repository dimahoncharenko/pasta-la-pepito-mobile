import { TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useForm } from "react-hook-form"
import React, { FC, useEffect, useState } from "react"
import Animated, {
  SharedValue,
  WithTimingConfig,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { Button, EmptyState, Icon, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/DemoNavigator"
import { colors, spacing, typography } from "../theme"

import { CartList } from "app/components/CartList"
import { CartBilling } from "app/components/CartBilling"
import { useStores } from "app/models"
import { DeliveryMethods } from "app/components/DeliveryMethods"
import { CheckoutForm } from "app/components/CheckoutForm"
import { translate } from "app/i18n"

type ViewState = "Cart" | "Checkout"

export const CartScreen: FC<TabScreenProps<"CartScreen">> = observer(function (_props) {
  const { cartStore } = useStores()
  const [view, setView] = useState<ViewState>("Cart")
  const fadeAnimFirstView = useSharedValue(1)
  const fadeAnimSecondView = useSharedValue(0)

  const fadeIn = (anim: SharedValue<number>, userConfig?: WithTimingConfig) => {
    anim.value = withTiming(1, userConfig)
  }

  const fadeOut = (anim: SharedValue<number>, userConfig?: WithTimingConfig) => {
    anim.value = withTiming(0, userConfig)
  }

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

  useEffect(() => {
    if (view === "Cart") {
      fadeIn(fadeAnimFirstView, { duration: 700 })
      fadeOut(fadeAnimSecondView, { duration: 700 })
    } else {
      fadeOut(fadeAnimFirstView, { duration: 700 })
      fadeIn(fadeAnimSecondView, { duration: 700 })
    }
  }, [view])

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

  const handleSubmitForm = (data: typeof control._formValues) => {
    console.log("Submitted: ", data)
    setView("Checkout")
  }

  const handleReturnToMenu = () => _props.navigation.navigate("MenuList")

  const SelectedView = (view: ViewState) => {
    switch (view) {
      case "Cart":
        return (
          <Animated.View
            style={{
              opacity: fadeAnimFirstView,
            }}
          >
            <Text preset="bold" style={$heading}>
              <Icon icon="caretLeft" /> {translate("screenHeaders.cart")}
            </Text>
            <DeliveryMethods control={control} errors={errors} />
            <CartList entries={cartStore.getAllEntries} />
            <CartBilling totalPrice={cartStore.getTotalPrice} />
            <Button
              style={$orderButton}
              pressedStyle={$orderButtonHover}
              onPress={handleSubmit(handleSubmitForm)}
              textStyle={{ color: "white" }}
              tx={"common.orderButton"}
            />
            <Button
              onPress={handleReturnToMenu}
              style={$returnButton}
              textStyle={{ color: colors.palette.primary100 }}
              tx="common.menuButton"
            />
          </Animated.View>
        )
      case "Checkout":
        return (
          <Animated.View
            style={{
              opacity: fadeAnimSecondView,
            }}
          >
            <CheckoutForm
              handleReturn={() => {
                handleReturnToMenu()
                setView("Cart")
              }}
            />
          </Animated.View>
        )
    }
  }

  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      {SelectedView(view)}
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
