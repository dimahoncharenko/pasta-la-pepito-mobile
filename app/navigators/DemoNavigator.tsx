import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { CartScreen, HomeScreen, DemoDebugScreen } from "../screens"
import { MenuScreen } from "../screens/MenuScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"

export type TabParamList = {
  CartScreen: undefined
  HomeScreen: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  MenuList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `DemoNavigator`.
 */
export const Navigator = observer(() => {
  const { bottom } = useSafeAreaInsets()
  const { cartStore } = useStores()

  return (
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
    </Tab.Navigator>
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
