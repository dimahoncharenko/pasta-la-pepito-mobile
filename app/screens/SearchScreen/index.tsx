import { Icon, Screen, Text } from "app/components"
import { DishesDisplay } from "app/components/DishesDisplay"
import { FlexRow } from "app/components/FlexRow"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { colors, spacing, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import { useDeferredValue, useMemo, useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export const SearchScreen = observer(() => {
  const { menuStore } = useStores()

  const [search, setSearch] = useState("")
  const deferredSearch = useDeferredValue(search)

  const filtered = useMemo(() => {
    return menuStore.entries.filter(
      (item) =>
        item.category.toLowerCase().includes(deferredSearch.toLowerCase()) ||
        item.name.toLowerCase().includes(deferredSearch.toLowerCase()),
    )
  }, [deferredSearch])

  return (
    <Screen preset="fixed" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="bold" style={$heading}>
        <Icon icon="caretLeft" /> {translate("screenHeaders.search")}
      </Text>
      <View
        style={{
          paddingHorizontal: 12,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: colors.palette.primary200,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexRow>
          <Icon icon="search" size={24} />
          <TextInput
            placeholder={translate("searchScreen.searchPlaceholder")}
            keyboardType="default"
            defaultValue={deferredSearch}
            style={{ paddingVertical: 12, fontSize: 16 }}
            onChangeText={(val) => setSearch(val)}
          />
        </FlexRow>

        {deferredSearch && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Icon icon="x" size={24} />
          </TouchableOpacity>
        )}
      </View>
      <DishesDisplay
        dishes={deferredSearch ? filtered : menuStore.entries}
        containerStyle={{ marginBottom: 210 }}
      />
    </Screen>
  )
})

const $heading: TextStyle = {
  fontSize: 28,
  lineHeight: 36.4,
  fontFamily: typography.fonts.alegreyaSC.medium,
  textAlign: "center",
  paddingBottom: 16,
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}