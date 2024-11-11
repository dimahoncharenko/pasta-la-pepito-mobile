import { Image, View } from "react-native"
import { Text } from "react-native-paper"
import { Button, Icon } from "src/components"
import { Dish } from "src/entities/dish/models/dish.types"
import { formatMass } from "src/shared/helpers/dishCard.helpers"
import { colors } from "src/theme"

type Props = {
  dish: Dish
}

export const HorizontalDishCard = ({ dish }: Props) => {
  return (
    <View className="flex-row rounded-large overflow-hidden mt-6 bg-white border border-primary-light">
      <Image source={{ uri: `${dish.image}` }} className="w-full max-w-[130px]" />
      <View className="p-5 gap-4">
        <View className="flex-row w-full">
          <Text className="font-interBold flex-1 min-w-[150px] text-sm leading-[16.94px]">
            {dish.title}
          </Text>
        </View>
        <Text className="text-sm leading-[16.94px] font-inter opacity-70">
          Вага: {dish.weight ? formatMass(dish.weight) : "не встановлено"}
        </Text>
        <View className="flex-row w-[160px] items-center justify-between pr-4">
          <Text className="text-xl font-interBold leading-[19.36px]">{dish.price}₴</Text>
          <Button className="rounded-full w-10 h-10 bg-primary-light justify-center items-center">
            <Icon icon="cart" color={colors.white} size={22} />
          </Button>
        </View>
      </View>
    </View>
  )
}
