import type { ReactNode } from "react"
import { Image, View } from "react-native"
import { Dish } from "src/entities/dish/models/dish.types"
import { formatMass } from "src/shared/helpers/dishCard.helpers"
import { HitLabel } from "../../../components/HitLabel"
import { Text } from "../../../components/Text"

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
    <View className="relative w-full overflow-hidden rounded-enormous border border-primary-light mb-6">
      <View className="relative aspect-[5/4]">
        <Image
          src={dish.image ? dish.image : "https://placehold.co/600x400.png"}
          alt={dish.title}
          className="object-cover absolute top-0 bottom-0 left-0 right-0"
        />
      </View>
      <View className="bg-white p-4">
        <Text className="text-xl font-interMedium leading-[26px] h-[46px] mb-1">{dish.title}</Text>
        <Text className="text-sm leading-[18.2px] mb-6 opacity-70">{dish.composition}</Text>
        <View>
          <View className="flex-row w-full justify-between items-center mb-4">
            {dish.weight ? (
              <Text className="text-sm leading-[18.2px] opacity-70">
                Вага: {formatMass(dish.weight)}
              </Text>
            ) : (
              <Text className="text-sm leading-[18.2px] opacity-70">Вага: не вказано</Text>
            )}
            {addIngredientSlot}
          </View>

          <View className="flex-row w-full justify-between items-center mb-4">
            <Text className="font-interMedium text-[26px] leading-[31.47px]">
              {dish.price.toFixed(0)}₴
            </Text>
            {addToCartSlot}
          </View>
        </View>
      </View>

      {isHit && <HitLabel />}
    </View>
  )
}
