import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { View } from "react-native"
import Animated, {
  SharedValue,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from "react-native-reanimated"
import { CartBilling } from "src/components/CartBilling"
import { CartList } from "src/components/CartList"
import { CheckoutForm } from "src/components/CheckoutForm"
import { DeliveryMethods } from "src/components/DeliveryMethods"
import { useStores } from "src/models"
import { CartEntry as TCartEntry } from "src/models/Cart"
import { translate } from "src/shared/i18n"
import { Button, EmptyState, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { TabScreenProps } from "./HomeScreen"

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
      <View className="items-center justify-center h-full">
        <EmptyState preset="generic" ButtonProps={{ className: "hidden" }} />
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
            <Text
              style={{ textAlign: "center" }}
              className="text-[28px] leading-[36.4px] font-alegreyaSCMedium"
            >
              {translate("screenHeaders.cart")}
            </Text>
            <DeliveryMethods control={control} errors={errors} />
            <CartList entries={cartStore.getAllEntries as TCartEntry[]} />
            <CartBilling totalPrice={cartStore.getTotalPrice} />
            <Button
              style={{
                backgroundColor: colors.palette.primary100,
                padding: 12.5,
                borderRadius: spacing.xl - 2,
                marginBottom: spacing.xl,
              }}
              textClassname="text-white text-lg text-center"
              onPress={handleSubmit(handleSubmitForm)}
              tx={"common.orderButton"}
            />
            <Button
              onPress={handleReturnToMenu}
              style={{
                borderWidth: 1,
                borderColor: colors.palette.primary100,
                padding: 12.5,
                borderRadius: spacing.xl - 2,
                marginBottom: spacing.xl,
              }}
              textClassname="text-white text-lg text-center text-primary-light"
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
    <Screen preset="scroll" className="px-6 mt-14" safeAreaEdges={["top"]}>
      {SelectedView(view)}
    </Screen>
  )
})
