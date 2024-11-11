import { Link } from "@react-navigation/native"
import { Platform, View } from "react-native"
import { ListItem, Text } from "src/components"
import { screenPathMap } from "src/shared/helpers/homePage.helpers"
import { isRTL } from "src/shared/i18n"

interface ListItem {
  item: { name: string; useCases: string[] }
  sectionIndex: number
  handleScroll?: (sectionIndex: number, itemIndex?: number) => void
  navigate: (path: any) => void
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

const WebListItem = ({ item, sectionIndex }: ListItem) => {
  const sectionSlug = item.name.toLowerCase()

  return (
    <View>
      <Link to={`/showroom/${sectionSlug}`} className="pt-6 pb-2">
        <Text preset="bold">{item.name}</Text>
      </Link>
      {item.useCases.map((u) => {
        const itemSlug = slugify(u)

        return (
          <Link key={`section${sectionIndex}-${u}`} to={`/showroom/${sectionSlug}/${itemSlug}`}>
            <Text>{u}</Text>
          </Link>
        )
      })}
    </View>
  )
}

const NativeListItem = ({ item, sectionIndex, handleScroll, navigate }: ListItem) => (
  <View>
    <Text
      onPress={() => handleScroll?.(sectionIndex)}
      preset="bold"
      className="text-white pt-6 pb-2"
    >
      {item.name}
    </Text>
    {item.useCases.map((u) => (
      <ListItem
        key={`section${sectionIndex}-${u}`}
        textStyle={{ color: "white" }}
        onPress={() => navigate(screenPathMap[u])}
        text={u}
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        rightIconColor="white"
      />
    ))}
  </View>
)

export const MenuListItem = Platform.select({ web: WebListItem, default: NativeListItem })
