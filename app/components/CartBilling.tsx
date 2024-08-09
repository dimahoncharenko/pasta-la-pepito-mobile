import { TextStyle, View, ViewStyle } from "react-native"
import { Text } from "./Text"
import { spacing, typography } from "app/theme"

const fixedDeliveryBilling = 100

type Props = {
  totalPrice: number
}
export const CartBilling = function ({ totalPrice }: Props) {
  const deliveryBilling = totalPrice > 0 ? fixedDeliveryBilling : 0

  return (
    <View style={$container}>
      <View style={$param}>
        <Text style={$paramText} tx="cartScreen.summarySection.totalTitle" />
        <Text style={$paramText}>{totalPrice.toFixed(0)}₴</Text>
      </View>
      <View style={$param}>
        <Text style={$paramText} tx="cartScreen.summarySection.deliveryTitle" />
        <Text style={$paramText}>{deliveryBilling}₴</Text>
      </View>
      <View style={$param}>
        <Text style={$emphasizedParamText} tx="cartScreen.summarySection.totalPriceTitle" />
        <Text style={$emphasizedParamText}>{(totalPrice + deliveryBilling).toFixed(0)}₴</Text>
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  paddingVertical: 40,
  paddingHorizontal: 22,
}

const $param: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: spacing.md,
}

const $paramText: TextStyle = {
  fontSize: 18,
  lineHeight: 24,
}

const $emphasizedParamText: TextStyle = {
  fontFamily: typography.fonts.inter.medium,
  fontSize: 22,
  lineHeight: 28.6,
}
