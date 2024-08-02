import { View } from "react-native"

import { Text } from "./Text"
import { colors, typography } from "app/theme"
import { Button } from "./Button"

type Props = {
  navigateToMenu: () => void
}

export const Introduction = ({ navigateToMenu }: Props) => {
  return (
    <View style={{ display: "flex", alignItems: "center", paddingHorizontal: 24 }}>
      <Text
        preset="heading"
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
      <Text
        preset="subheading"
        style={{ textAlign: "center", fontSize: 16, lineHeight: 22, paddingHorizontal: 10 }}
      >
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
        textStyle={{ color: "white" }}
        pressedStyle={{ backgroundColor: colors.main }}
        onPress={navigateToMenu}
      >
        Подивитися меню
      </Button>
    </View>
  )
}
