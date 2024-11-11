import { Picker } from "@react-native-picker/picker"
import { observer } from "mobx-react-lite"
import { useStores } from "src/models"
import { translate } from "src/shared/i18n"
import { spacing } from "src/theme"

export const FilterButton = observer(() => {
  const { menuStore } = useStores()

  return (
    <Picker
      selectedValue={menuStore.getCurrentCategory}
      onValueChange={async (val) => {
        menuStore.changeCategory(val)
      }}
      renderToHardwareTextureAndroid={false}
      style={{ marginBottom: -spacing.lg }}
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
