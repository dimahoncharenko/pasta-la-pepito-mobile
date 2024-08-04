import { View, Text } from "react-native"

import { colors, typography } from "app/theme"
import { Button } from "./Button"

type Props = {
  navigateToMenu: () => void
}

export const Introduction = ({ navigateToMenu }: Props) => {
  return (
    <View className="flex items-center px-6">
      <Text
        style={{
          color: colors.palette.primary300,
          fontFamily: typography.fonts.alegreyaSC.medium,
          fontSize: 44,
          textAlign: "center",
          padding: 24,
          lineHeight: 52,
        }}
      >
        Pasta La Pepito
      </Text>
      <Text className="text-center text-base leading-[22px] px-[10px]">
        Відчуйте аромат і неперевершений смак наших італійських страв, якими тепер можна
        насолоджуватися прямо вдома
      </Text>
      <Button
        style={{
          marginTop: 24,
          width: "100%",
          borderRadius: 30,
          backgroundColor: colors.palette.primary100,
          borderWidth: 0,
        }}
        pressedStyle={{ backgroundColor: colors.main }}
        textStyle={{ color: colors.palette.gray100 }}
        onPress={navigateToMenu}
      >
        Подивитися меню
      </Button>
    </View>
  )
}
