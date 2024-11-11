import { useState } from "react"
import { View, ViewStyle } from "react-native"
import { colors } from "src/theme"
import { Text } from "./Text"

type Props = {
  tabs: [string, string]
  children(
    tab: ({
      tab,
      children,
    }: {
      tab: string
      children: React.ReactNode
    }) => React.JSX.Element | null,
  ): React.ReactNode
}
export const Tabs = ({ tabs, children }: Props) => {
  const [currentTab, setCurrentTab] = useState(tabs[0])

  const HeaderTab = ({ tab }: { tab: string }) => {
    return (
      <Text
        style={[currentTab === tab && $selectedTab]}
        className="py-3 text-base px-9"
        onPress={() => {
          setCurrentTab(tab)
        }}
      >
        {tab}
      </Text>
    )
  }

  const TabContent = ({ tab, children }: { tab: string; children: React.ReactNode }) => {
    if (currentTab !== tab) return null

    return <>{children}</>
  }

  return (
    <View>
      <View style={$tabsContainer}>
        {tabs.map((tab, index) => (
          <HeaderTab key={index} tab={tab} />
        ))}
      </View>
      {children(TabContent)}
    </View>
  )
}

const $tabsContainer: ViewStyle = {
  // Color in hex + opacity of 20%
  backgroundColor: colors.palette.primary100 + "33",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: 4,
  borderRadius: 30,
  position: "relative",
  marginVertical: 32,
}

const $selectedTab: ViewStyle = {
  backgroundColor: "white",
  width: "auto",
  height: "100%",
  borderRadius: 30,
}
