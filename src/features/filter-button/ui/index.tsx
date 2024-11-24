import { Picker } from "@react-native-picker/picker"
import { observer } from "mobx-react-lite"
import { useMemo } from "react"
import { useStores } from "src/models"
import { spacing } from "src/theme"

export const FilterButton = observer(() => {
  const { menuStore } = useStores()

  const filters = useMemo(() => {
    return [...new Set(menuStore.entries.map((entry) => entry.category.name))]
  }, [menuStore.entries.length])

  return (
    <Picker
      selectedValue={menuStore.getCurrentCategory}
      onValueChange={async (val) => {
        menuStore.changeCategory(val)
      }}
      renderToHardwareTextureAndroid={false}
      style={{ marginBottom: -spacing.lg }}
    >
      {filters.map((filter, index) => (
        <Picker.Item
          key={index}
          label={filter.slice(0, 1).toUpperCase() + filter.slice(1)}
          value={filter}
        />
      ))}
      {/* <Picker.Item label={translate("categories.all")} value="All" />
      <Picker.Item label={translate("categories.pasta")} value="Паста" />
      <Picker.Item label={translate("categories.risotto")} value="Ризото" />
      <Picker.Item label={translate("categories.soups")} value="Суп" />
      <Picker.Item label={translate("categories.drinks")} value="Напій" />
      <Picker.Item label={translate("categories.other")} value="Інше" /> */}
    </Picker>
  )
})
