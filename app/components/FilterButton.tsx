import { Picker } from "@react-native-picker/picker"
import { translate } from "app/i18n"
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
          <Picker.Item label={translate("categories.all")} value="" />
          <Picker.Item label={translate("categories.pasta")} value="Pasta" />
          <Picker.Item label={translate("categories.risotto")} value="Risotto" />
          <Picker.Item label={translate("categories.soups")} value="Soup" />
          <Picker.Item label={translate("categories.drinks")} value="Drink" />
          <Picker.Item label={translate("categories.other")} value="Other" />
        </Picker>
      )}
    />
  )
}
