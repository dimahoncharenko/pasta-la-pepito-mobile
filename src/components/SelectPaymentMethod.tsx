import { Control, Controller } from "react-hook-form"
import { Text, View } from "react-native"
import { RadioButton } from "react-native-paper"

type Props = {
  control: Control<
    {
      name: string
      phone: string
      email: string
      date: string
      time: string
      paymentMethod: string
      cashAmount: number
      withoutExchange: boolean
    },
    any
  >
}

export const SelectPaymentMethod = ({ control }: Props) => {
  return (
    <Controller
      name="paymentMethod"
      control={control}
      render={({ field: { onChange, value } }) => (
        <View className="flex flex-row items-center">
          <RadioButton
            status={value === "card" ? "checked" : "unchecked"}
            value="card"
            onPress={() => {
              onChange("card")
            }}
          />
          <Text>Карткою онлайн</Text>
        </View>
      )}
    />
  )
}
