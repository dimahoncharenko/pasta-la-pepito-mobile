import { View } from "react-native"
import { Button, Text } from "src/components"
import { colors } from "src/theme"

type Props = {
  navigateToMenu: () => void
}

export const Introduction = ({ navigateToMenu }: Props) => {
  return (
    <View className="flex items-center px-6">
      <Text className="text-[44px] leading-[52.8px] font-alegreyaSCMedium text-center p-6 text-primary-dark">
        Pasta La Pepito
      </Text>
      <Text
        className="text-center text-base font-inter leading-[20.8px] px-[10px]"
        tx={"homeScreen.introduction"}
      />
      <Button
        className="mt-6 w-full rounded-[30px] py-[12.5px] bg-primary-light border-0"
        pressedStyle={{ backgroundColor: colors.main }}
        textClassname="text-gray-100 text-[18px] text-center font-interMedium leading-[23.4px]"
        onPress={navigateToMenu}
        tx={"common.menuButton"}
      />
    </View>
  )
}
