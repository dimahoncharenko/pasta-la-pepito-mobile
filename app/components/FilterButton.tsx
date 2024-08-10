import { Picker } from "@react-native-picker/picker"
import { Dish } from "app/data/dish.data"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { observer } from "mobx-react-lite"

export const FilterButton = observer(() => {
  const { menuStore } = useStores()

  return (
    <Picker
      selectedValue={menuStore.getCurrentCategory}
      onValueChange={async (val) => {
        menuStore.changeCategory(val as Dish["category"])
      }}
      renderToHardwareTextureAndroid={false}
    >
      <Picker.Item label={translate("categories.all")} value="All" />
      <Picker.Item label={translate("categories.pasta")} value="Pasta" />
      <Picker.Item label={translate("categories.risotto")} value="Risotto" />
      <Picker.Item label={translate("categories.soups")} value="Soup" />
      <Picker.Item label={translate("categories.drinks")} value="Drink" />
      <Picker.Item label={translate("categories.other")} value="Other" />
    </Picker>
  )
})
