import { Link, RouteProp, useRoute } from "@react-navigation/native"
import React, { FC, ReactElement, useEffect, useRef, useState } from "react"
import { Image, Platform, SectionList, View, ViewStyle } from "react-native"
import { Drawer } from "react-native-drawer-layout"
import { ListItem, Text } from "../../components"
import { isRTL } from "../../i18n"
import { DemoTabParamList, DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { colors, spacing } from "../../theme"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import * as Demos from "./demos"
import { Sections } from "./Sections"
import { AppStackParamList } from "app/navigators"
import { screenPathMap } from "app/helpers/homePage.helpers"

export interface Demo {
  name: string
  description: string
  data: ReactElement[]
}

interface DemoListItem {
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

const WebListItem: FC<DemoListItem> = ({ item, sectionIndex }) => {
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

const NativeListItem: FC<DemoListItem> = ({ item, sectionIndex, handleScroll, navigate }) => (
  <View>
    <Text
      onPress={() => handleScroll?.(sectionIndex)}
      preset="bold"
      style={[$menuContainer, { color: "white" }]}
    >
      {item.name}
    </Text>
    {item.useCases.map((u, index) => (
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

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    const [open, setOpen] = useState(false)
    const timeout = useRef<ReturnType<typeof setTimeout>>()
    const listRef = useRef<SectionList>(null)
    const route = useRoute<RouteProp<DemoTabParamList, "DemoShowroom">>()
    const params = route.params

    // handle Web links
    React.useEffect(() => {
      if (params !== undefined && Object.keys(params).length > 0) {
        const demoValues = Object.values(Demos)
        const findSectionIndex = demoValues.findIndex(
          (x) => x.name.toLowerCase() === params.queryIndex,
        )
        let findItemIndex = 0
        if (params.itemIndex) {
          try {
            findItemIndex =
              demoValues[findSectionIndex].data.findIndex(
                (u) => slugify(u.props.name) === params.itemIndex,
              ) + 1
          } catch (err) {
            console.error(err)
          }
        }
        handleScroll(findSectionIndex, findItemIndex)
      }
    }, [params])

    const toggleDrawer = () => {
      if (!open) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    const handleScroll = (sectionIndex: number, itemIndex = 0) => {
      listRef.current?.scrollToLocation({
        animated: true,
        itemIndex,
        sectionIndex,
      })
      toggleDrawer()
    }

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    const $drawerInsets = useSafeAreaInsetsStyle(["top"])

    const navigateToMenu = () => _props.navigation.navigate("DemoPodcastList")

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
                  name: "Корисні лінки",
                  useCases: [
                    "Про нас",
                    "Рецепти",
                    "Контакти",
                    "Наш блог",
                    "Відгуки",
                    "Політика\nконфіденційності",
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
