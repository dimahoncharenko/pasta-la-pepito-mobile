import { Picker } from "@react-native-picker/picker"
import { Control, Controller } from "react-hook-form"

type Props = {
  control: Control<
    {
      sort: string
      filter: string
    },
    any
  >
}

export const FilterButton = ({ control }: Props) => {
  console.log("FilterButton: ", control._formValues)

  return (
    <Controller
      name="filter"
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Picker
          selectedValue={value}
          onBlur={onBlur}
          onValueChange={async (val) => {
            onChange(val)
          }}
          renderToHardwareTextureAndroid={false}
        >
          <Picker.Item label="Все меню" value="" />
          <Picker.Item label="Паста" value="Pasta" />
          <Picker.Item label="Різотто" value="Risotto" />
          <Picker.Item label="Супи" value="Soup" />
          <Picker.Item label="Напої" value="Drink" />
          <Picker.Item label="Інше" value="Other" />
        </Picker>
      )}
    />
  )
}
