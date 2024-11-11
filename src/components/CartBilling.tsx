import { View } from "react-native"
import { Text } from "./Text"

type Props = {
  totalPrice: number
}
export const CartBilling = function ({ totalPrice }: Props) {
  return (
    <View className="my-10">
      <View className="flex-row justify-between mb-4">
        <Text
          className="font-interMedium text-[22px] leading-[28.6px]"
          tx="cartScreen.summarySection.totalPriceTitle"
        />
        <Text className="font-interMedium text-[22px] leading-[28.6px]">
          {totalPrice.toFixed(0)}₴
        </Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-lg leading-[23.4px]" tx="cartScreen.summarySection.deliveryTitle" />
        <Text className="text-lg leading-[23.4px]" tx="cartScreen.summarySection.deliveryValue" />
      </View>
    </View>
  )
}
