import { observer } from "mobx-react-lite"
import { ButtonProps, TextStyle, ViewStyle } from "react-native"
import { useStores } from "src/models"
import { colors } from "src/theme"
import { Button } from "./Button"

type Props = {
  dishId: number
} & Omit<ButtonProps, "title">

export const AddIngredientButton = observer(({ dishId, ...props }: Props) => {
  const { menuStore } = useStores()

  return (
    <Button
      className="py-[13px] w-48 border border-primary-light rounded-enormous"
      disabledStyle={$btnDisabled}
      disabledTextStyle={$btnTextDisabled}
      textClassname="text-primary-light text-base text-center font-interMedium"
      {...props}
      onPress={() => menuStore.setViewingDish(dishId)}
    >
      Додати інгредієнт
    </Button>
  )
})

const $btnDisabled: ViewStyle = {
  backgroundColor: colors.palette.gray200,
  borderColor: colors.palette.gray200,
}

const $btnTextDisabled: TextStyle = {
  color: colors.palette.gray150,
}
