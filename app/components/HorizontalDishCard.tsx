import { colors, spacing, typography } from "app/theme"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "react-native-paper"
import { Dish } from "types/dish.types"
import { Button } from "./Button"
import { Icon } from "./Icon"
import { formatMass } from "app/helpers/dishCard.helpers"

type Props = {
  dish: Dish
}

export const HorizontalDishCard = ({ dish }: Props) => {
  return (
    <View style={$wrapper}>
      <Image src={dish.image} style={$image} />
      <View style={$content}>
        <View style={$textWrapper}>
          <Text style={$dishHeading}>{dish.title}</Text>
        </View>
        <Text style={$weight}>
          Вага: {dish.weight ? formatMass(dish.weight) : "не встановлено"}
        </Text>
        <View style={$bottomContent}>
          <Text style={$price}>{dish.price}₴</Text>
          <Button style={$buttonWrapper}>
            <Icon icon="cart" color={colors.white} size={24} />
          </Button>
        </View>
      </View>
    </View>
  )
}

const $wrapper: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  borderRadius: spacing.sm,
  overflow: "hidden",
  marginTop: spacing.lg,
  backgroundColor: "#ffffffa7",
  borderWidth: 1,
  borderColor: colors.palette.primary100,
}

const $image: ImageStyle = {
  width: 120,
}

const $content: ViewStyle = {
  display: "flex",
  padding: 20,
  gap: spacing.md,
}

const $bottomContent: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $textWrapper: ViewStyle = {
  flexDirection: "row",
  minWidth: 150,
}

const $dishHeading: TextStyle = {
  fontSize: 14,
  fontFamily: typography.fonts.inter.bold,
  flex: 1,
  flexWrap: "wrap",
}

const $weight: TextStyle = {
  fontSize: 14,
  lineHeight: 15.6,
  opacity: 0.7,
}

const $price: TextStyle = {
  fontSize: spacing.lg,
  fontFamily: typography.fonts.inter.bold,
}

const $buttonWrapper: ViewStyle = {
  borderRadius: 512,
  backgroundColor: colors.palette.primary100,
  borderWidth: 0,
  width: 55,
  height: 40,
}
