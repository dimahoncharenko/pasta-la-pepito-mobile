import { Picker } from "@react-native-picker/picker"
import { Control, Controller } from "react-hook-form"
import { View } from "react-native"
import { availableTimes } from "src/shared/helpers/selectTime.helpers"
import { colors } from "src/theme"
import { Text } from "./Text"

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

export const SelectTime = ({ control }: Props) => {
  const times = availableTimes()

  return (
    <Controller
      name="time"
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.palette.gray300,
          }}
        >
          <Text
            className="-mb-1 text-sm"
            tx="cartScreen.checkoutSection.deliveryTime.fields.time"
          />
          <Picker
            renderToHardwareTextureAndroid={false}
            style={{
              marginLeft: -16,
              marginBottom: -8,
              color: colors.palette.gray300,
            }}
            dropdownIconColor="#f1f0f0"
            dropdownIconRippleColor="#f1f0f0"
            selectedValue={value}
            onValueChange={(val) => {
              onChange(val)
            }}
            onBlur={onBlur}
          >
            {times.map((time, key) => (
              <Picker.Item key={key} label={time} value={time} />
            ))}
          </Picker>
        </View>
      )}
    />
  )
}
