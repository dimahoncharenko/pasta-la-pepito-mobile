import { useState } from "react"
import { Image, View } from "react-native"
import { Drawer } from "react-native-drawer-layout"
import { isRTL, translate } from "src/shared/i18n"
import { useSafeAreaInsetsStyle } from "src/utils/useSafeAreaInsetsStyle"
import { MenuListItem } from "src/widgets/sidebar-menu/ui/menu-list-item"

type Props = {
  children: React.ReactNode
  navigation: (path: any) => void
}

export const SidebarMenu = ({ children, navigation }: Props) => {
  const [open, setOpen] = useState(false)

  const $drawerInsets = useSafeAreaInsetsStyle(["top"])

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      drawerType={"slide"}
      drawerPosition={isRTL ? "right" : "left"}
      renderDrawerContent={() => (
        <View style={[$drawerInsets]} className="flex-1 bg-primary">
          <View className="self-center justify-center h-14 px-6">
            <Image source={require("../../../../assets/images/brand.png")} />
          </View>
          <View style={{ display: "flex", paddingHorizontal: 24 }}>
            <MenuListItem
              sectionIndex={0}
              navigate={navigation}
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
      {children}
    </Drawer>
  )
}
