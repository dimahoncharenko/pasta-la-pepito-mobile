import { Link } from "@react-navigation/native"
import { screenPathMap } from "app/helpers/homePage.helpers"
import React, { FC, ReactElement, useState } from "react"
import { Image, Platform, View, ViewStyle } from "react-native"
import { Drawer } from "react-native-drawer-layout"
import { ListItem, Text } from "../../components"
import { isRTL, translate } from "../../i18n"
import { TabScreenProps } from "../../navigators/BottomNavigator"
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { Sections } from "./Sections"

export interface Screen {
  name: string
  description: string
  data: ReactElement[]
}

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

const WebListItem: FC<ListItem> = ({ item, sectionIndex }) => {
  const sectionSlug = item.name.toLowerCase()

  return (
    <View>
      <Link to={`/showroom/${sectionSlug}`} style={$menuContainer}>
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

const NativeListItem: FC<ListItem> = ({ item, sectionIndex, handleScroll, navigate }) => (
  <View>
    <Text
      onPress={() => handleScroll?.(sectionIndex)}
      preset="bold"
      style={[$menuContainer, { color: "white" }]}
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

const ShowroomListItem = Platform.select({ web: WebListItem, default: NativeListItem })

export const HomeScreen: FC<TabScreenProps<"HomeScreen">> = function DemoShowroomScreen(_props) {
  const [open, setOpen] = useState(false)

  const $drawerInsets = useSafeAreaInsetsStyle(["top"])

  const navigateToMenu = () => _props.navigation.navigate("MenuList")

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType={"slide"}
      drawerPosition={isRTL ? "right" : "left"}
      renderDrawerContent={() => (
        <View style={[$drawer, $drawerInsets]}>
          <View style={$logoContainer}>
            <Image source={require("../../../assets/images/brand.png")} />
          </View>
          <View style={{ display: "flex", paddingHorizontal: 24 }}>
            <ShowroomListItem
              sectionIndex={0}
              navigate={_props.navigation.navigate}
              item={{
                name: translate("homeScreen.drawer.title"),
                useCases: [
                  translate("homeScreen.drawer.links.about"),
                  translate("homeScreen.drawer.links.recipes"),
                  translate("homeScreen.drawer.links.contacts"),
                  translate("homeScreen.drawer.links.blog"),
                  translate("homeScreen.drawer.links.reviews"),
                  translate("homeScreen.drawer.links.terms"),
                ],
              }}
            />
          </View>
        </View>
      )}
    >
      <Sections navigateToMenu={navigateToMenu} />
    </Drawer>
  )
}

const $drawer: ViewStyle = {
  backgroundColor: colors.main,
  flex: 1,
}

const $logoContainer: ViewStyle = {
  alignSelf: "flex-start",
  justifyContent: "center",
  height: 56,
  paddingHorizontal: spacing.lg,
}

const $menuContainer: ViewStyle = {
  paddingBottom: spacing.xs,
  paddingTop: spacing.lg,
}
