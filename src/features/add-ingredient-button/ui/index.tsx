import { observer } from "mobx-react-lite"
import React from "react"
import { ButtonProps, TextStyle, ViewStyle } from "react-native"
import { Button } from "src/components"
import { useStores } from "src/models"
import { colors } from "src/theme"

type Props = {
  dishId: number
  ButtonSlot?: (handler: () => void) => React.ReactNode
} & Omit<ButtonProps, "title">

export const AddIngredientButton = observer(({ dishId, ButtonSlot, ...props }: Props) => {
  const { menuStore } = useStores()

  return (
    <>
      {!ButtonSlot ? (
        <Button
          className="py-[13px] px-[32px] border border-primary-light rounded-enormous"
          disabledStyle={$btnDisabled}
          disabledTextStyle={$btnTextDisabled}
          textClassname="text-primary-light text-sm font-interMedium"
          {...props}
          onPress={() => menuStore.setViewingDish(dishId)}
        >
          Додати інгредієнт
        </Button>
      ) : (
        ButtonSlot(() => menuStore.setViewingDish(dishId))
      )}
    </>
  )
})

const $btnDisabled: ViewStyle = {
  backgroundColor: colors.palette.gray200,
  borderColor: colors.palette.gray200,
}

const $btnTextDisabled: TextStyle = {
  color: colors.palette.gray150,
}
