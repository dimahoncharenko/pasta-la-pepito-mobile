import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React, { FC, ReactElement } from "react"
import { AppStackParamList } from "src/app/navigators"
import { AppStackScreenProps, TabParamList } from "../../../app/navigators/BottomNavigator"
import { Sections } from "./Sections"

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

export interface Screen {
  name: string
  description: string
  data: ReactElement[]
}

export const HomeScreen: FC<TabScreenProps<"HomeScreen">> = function DemoShowroomScreen(_props) {
  const navigateToMenu = () => _props.navigation.navigate("MenuList")

  return <Sections navigateToMenu={navigateToMenu} />
}
