import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useStores } from "src/models"
import { SearchScreen } from "src/screens/SearchScreen"
import { SidebarMenu } from "src/widgets/sidebar-menu"
import { Icon } from "../../components"
import { CartScreen, DemoDebugScreen, HomeScreen } from "../../screens"
import { MenuScreen } from "../../screens/MenuScreen"
import { translate } from "../../shared/i18n"
import { colors, spacing, typography } from "../../theme"
import { AppStackParamList } from "./AppNavigator"

export type TabParamList = {
  CartScreen: undefined
  HomeScreen: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  MenuList: undefined
  SearchScreen: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export const Navigator = observer((props: AppStackScreenProps<"Home">) => {
  const { bottom } = useSafeAreaInsets()
  const { cartStore } = useStores()

  return (
    <SidebarMenu navigation={props.navigation.navigate}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [$tabBar, { height: bottom + 70 }],
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.text,
          tabBarLabelStyle: $tabBarLabel,
          tabBarItemStyle: $tabBarItem,
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: translate("tabs.home"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="home" color={focused ? colors.main : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            tabBarLabel: translate("tabs.cart"),
            tabBarBadge: cartStore.getEntriesCount > 0 ? cartStore.getEntriesCount : undefined,
            tabBarBadgeStyle: { backgroundColor: colors.palette.primary100 },
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "relative" }}>
                <Icon icon="cart" color={focused ? colors.main : undefined} size={30} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="MenuList"
          component={MenuScreen}
          options={{
            tabBarAccessibilityLabel: translate("tabs.menu"),
            tabBarLabel: translate("tabs.menu"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="dish" color={focused ? colors.main : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="DemoDebug"
          component={DemoDebugScreen}
          options={{
            tabBarLabel: translate("tabs.profile"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="debug" color={focused ? colors.main : undefined} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: translate("tabs.search"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="search" color={focused ? colors.main : undefined} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </SidebarMenu>
  )
})

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
