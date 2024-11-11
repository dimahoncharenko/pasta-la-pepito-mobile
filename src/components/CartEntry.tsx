import { observer } from "mobx-react-lite"
import { Image, TouchableOpacity, View } from "react-native"
import { useStores } from "src/models"
import { CartEntry as TCartEntry } from "src/models/Cart"
import { colors } from "src/theme"
import { Button } from "./Button"
import { Icon } from "./Icon"
import { Text } from "./Text"

type Props = {
  entry: TCartEntry
}

export const CartEntry = observer(({ entry }: Props) => {
  const { cartStore, menuStore } = useStores()

  const handleChangeQuantity = (op: "DECREASE" | "INCREASE") => {
    if (op === "DECREASE") {
      cartStore.decreaseQuantity(entry.title)
    } else {
      cartStore.increaseQuantity(entry.title)
    }
  }

  const handleRemove = (name: string) => {
    cartStore.removeEntry(name)
  }

  return (
    <View>
      <View className="flex-start items-center flex-row gap-3">
        {entry.image && (
          <Image className="h-[90px] w-[90px] rounded-large" src={entry.image} alt={entry.title} />
        )}
        <View>
          <Text className="text-base leading-[20.8px] font-interMedium mb-2">{entry.title}</Text>
          <View className="bg-primary-lighter rounded-large py-2 px-3">
            <View className="flex-row gap-5">
              <Text className="text-sm leading-[18.2px] font-interMedium">
                Додаткові інгредієнти:
              </Text>
              <TouchableOpacity onPress={() => menuStore.setViewingDish(entry.id)}>
                <Icon icon="edit" size={20} />
              </TouchableOpacity>
            </View>
            <Text className="text-sm leading-[18.2px] mt-1">
              {entry.selectedIngredients.length
                ? entry.selectedIngredients.reduce(
                    (acc, curr) => (!acc ? curr.name : acc + ", " + curr.name),
                    "",
                  )
                : "немає"}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-start items-baseline flex-row gap-3 border-b-primary-light justify-between border-b py-4">
        <Icon
          icon="trash"
          color={colors.palette.gray300}
          onPress={() => handleRemove(entry.title)}
        />
        <View className="flex flex-row items-center gap-2">
          <Button
            className="border bg-gray-100 rounded-[6px] border-gray-200 h-10 w-10 justify-center items-center"
            textClassname="text-gray-400 text-xl"
            onPress={() => handleChangeQuantity("DECREASE")}
          >
            -
          </Button>
          <View className="border bg-gray-100 rounded-[6px] border-gray-200 h-10 w-10 justify-center items-center">
            <Text className="font-interMedium text-xl leading-[26px]">{entry.quantity}</Text>
          </View>
          <Button
            className="border bg-gray-100 rounded-[6px] border-gray-200 h-10 w-10 justify-center items-center"
            textClassname="text-gray-400  text-xl"
            onPress={() => handleChangeQuantity("INCREASE")}
          >
            +
          </Button>
        </View>
        <Text className="text-xl font-interMedium leading-[26px]">{entry.price.toFixed(0)}₴</Text>
      </View>
    </View>
  )
})
