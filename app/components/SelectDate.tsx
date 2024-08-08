import { Picker } from "@react-native-picker/picker"
import { computeAvailableDates } from "app/helpers/selectDate.helpers"
import { colors } from "app/theme"
import { Control, Controller } from "react-hook-form"
import { Text, TextStyle, View, ViewStyle } from "react-native"

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

export const SelectDate = ({ control }: Props) => {
  const availableDates = computeAvailableDates()

  return (
    <Controller
      name="date"
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={$selectContainer}>
          <Text style={[$selectLabel, { marginBottom: -4 }]}>Дата</Text>
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
            {availableDates.map((date) => (
              <Picker.Item key={date} label={date} value={date} />
            ))}
          </Picker>
        </View>
      )}
    />
  )
}

const $selectContainer: ViewStyle = {
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderBottomColor: colors.palette.gray300,
}

const $selectLabel: TextStyle = {
  fontSize: 14,
}
