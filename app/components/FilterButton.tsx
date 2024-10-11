import { Picker } from "@react-native-picker/picker"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { observer } from "mobx-react-lite"

export const FilterButton = observer(() => {
  const { menuStore } = useStores()

  return (
    <Picker
      selectedValue={menuStore.getCurrentCategory}
      onValueChange={async (val) => {
        menuStore.changeCategory(val)
      }}
      renderToHardwareTextureAndroid={false}
    >
      <Picker.Item label={translate("categories.all")} value="All" />
      <Picker.Item label={translate("categories.pasta")} value="Паста" />
      <Picker.Item label={translate("categories.risotto")} value="Ризото" />
      <Picker.Item label={translate("categories.soups")} value="Суп" />
      <Picker.Item label={translate("categories.drinks")} value="Напій" />
      <Picker.Item label={translate("categories.other")} value="Інше" />
    </Picker>
  )
})
