import { Button, Text } from "app/components"
import { colors, typography } from "app/theme"
import { View } from "react-native"

type Props = {
  navigateToMenu: () => void
}

export const Introduction = ({ navigateToMenu }: Props) => {
  return (
    <View className="flex items-center px-6">
      <Text
        style={{
          fontFamily: typography.fonts.alegreyaSC.medium,
        }}
        className="text-[44px] leading-[56px] text-center p-6 text-primary-dark"
      >
        Pasta La Pepito
      </Text>
      <Text
        className="text-center text-base leading-[22px] px-[10px]"
        tx={"homeScreen.introduction"}
      />
      <Button
        className="mt-6 w-full rounded-[30px] bg-primary-light border-0"
        pressedStyle={{ backgroundColor: colors.main }}
        textClassname="text-gray-100"
        onPress={navigateToMenu}
        tx={"common.menuButton"}
      />
    </View>
  )
}
