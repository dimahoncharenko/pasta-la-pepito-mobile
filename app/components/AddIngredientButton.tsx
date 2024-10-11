import { ButtonProps, TextStyle, ViewStyle } from "react-native"
import { Button } from "./Button"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { useStores } from "app/models"

type Props = {
  dishId: number
} & Omit<ButtonProps, "title">

export const AddIngredientButton = observer(({ dishId, ...props }: Props) => {
  const { menuStore } = useStores()

  return (
    <Button
      style={[$btn, props.disabled && $btnDisabled]}
      textStyle={[$btnText, props.disabled && $btnTextDisabled]}
      {...props}
      onPress={() => menuStore.setViewingDish(dishId)}
    >
      Додати інгредієнт
    </Button>
  )
})

const $btn: ViewStyle = {
  borderRadius: 30,
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderWidth: 1,
  borderColor: colors.palette.primary100,
}

const $btnText: TextStyle = {
  color: colors.palette.primary100,
  fontSize: 14,
}

const $btnDisabled: ViewStyle = {
  backgroundColor: colors.palette.gray200,
  borderColor: colors.palette.gray300,
}

const $btnTextDisabled: TextStyle = {
  color: colors.palette.gray100,
}
