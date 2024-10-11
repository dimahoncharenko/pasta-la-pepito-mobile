import type { ReactNode } from "react"
import { Dish } from "types/dish.types"
import { HitLabel } from "./HitLabel"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { formatMass } from "app/helpers/dishCard.helpers"
import { colors, typography } from "app/theme"
import { Text } from "./Text"

export const DishCard = ({
  dish,
  addIngredientSlot,
  addToCartSlot,
  isHit = false,
}: {
  dish: Dish
  addIngredientSlot?: ReactNode
  addToCartSlot?: ReactNode
  isHit?: boolean
}) => {
  return (
    <View style={$wrapper}>
      <View style={$imgWrapper}>
        <Image
          src={dish.image ? dish.image : "https://placehold.co/600x400.png"}
          alt={dish.title}
          style={$img}
        />
      </View>
      <View style={$content}>
        <Text style={$title}>{dish.title}</Text>
        <Text style={$composition}>{dish.composition}</Text>
        <View>
          <View style={$row}>
            {dish.weight ? (
              <Text style={$weight}>Вага: {formatMass(dish.weight)}</Text>
            ) : (
              <Text style={$weight}>Вага: не вказано</Text>
            )}
            {addIngredientSlot}
          </View>

          <View style={$row}>
            <Text style={$price}>{dish.price.toFixed(0)}₴</Text>
            {addToCartSlot}
          </View>
        </View>
      </View>

      {isHit && <HitLabel />}
    </View>
  )
}

const $wrapper: ViewStyle = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: 30,
  borderColor: colors.palette.primary200,
  borderWidth: 1,
  borderStyle: "solid",
  marginBottom: 24,
}

const $imgWrapper: ViewStyle = {
  position: "relative",
  aspectRatio: "5/3.8417",
}

const $img: ImageStyle = {
  objectFit: "cover",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}

const $content: ViewStyle = {
  padding: 16,
  backgroundColor: "white",
}

const $title: TextStyle = {
  marginBottom: 4,
  height: 46,
  fontSize: 20,
  lineHeight: 26,
  fontFamily: typography.fonts.inter.medium,
}

const $composition: TextStyle = {
  marginBottom: 24,
  fontSize: 14,
  lineHeight: 18.2,
  height: 36,
  opacity: 0.7,
}

const $weight: TextStyle = {
  fontSize: 14,
  lineHeight: 18.2,
  opacity: 0.7,
}

const $price: TextStyle = {
  fontSize: 26,
  lineHeight: 31.47,
  fontFamily: typography.fonts.inter.medium,
}

const $row: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 16,
  marginBottom: 16,
}
