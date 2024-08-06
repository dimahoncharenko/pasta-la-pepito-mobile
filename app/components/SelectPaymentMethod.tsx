import { Control, Controller } from "react-hook-form"
import { Text } from "react-native"
import { View } from "react-native"
import { Checkbox, RadioButton, TextInput } from "react-native-paper"
import { TextField } from "./TextField"
import { colors } from "app/theme"

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
    <View>
      <Controller
        name="paymentMethod"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <View className="flex flex-row items-center">
              <RadioButton
                status={value === "cash" ? "checked" : "unchecked"}
                value="cash"
                onPress={() => {
                  onChange("cash")
                }}
              />
              <Text>Готівка</Text>
              {value === "cash" && (
                <View className="flex flex-row items-center ml-6">
                  <Controller
                    control={control}
                    name="withoutExchange"
                    render={({ field: { onChange, value } }) => (
                      <Checkbox
                        status={value ? "checked" : "unchecked"}
                        onPress={() => {
                          onChange(!value)
                        }}
                      />
                    )}
                  />
                  <Text>Без решти</Text>
                </View>
              )}
            </View>
            {value === "cash" && (
              <View className="flex flex-row ml-9 mt-3 mb-1">
                <Text>Решта з</Text>
                <TextField
                  keyboardType="numeric"
                  inputWrapperStyle={[
                    {
                      borderWidth: 0,
                      width: 54,
                    },
                  ]}
                  style={{
                    marginHorizontal: 0,
                    marginVertical: 0,
                    paddingVertical: 0,
                    height: 16,
                    fontSize: 12,
                    color: colors.palette.gray300,
                    borderBottomWidth: 1,
                    marginTop: 4,
                    marginLeft: 8,
                    borderBottomColor: colors.palette.gray400,
                    width: 54,
                  }}
                  placeholderTextColor={colors.palette.gray300}
                />
              </View>
            )}
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
          </>
        )}
      />
    </View>
  )
}
