import { useContext, useState } from "react"
import { GestureResponderEvent, TextStyle } from "react-native"
import { Dialog, Portal, Text } from "react-native-paper"

import { UnsavedChangesContext } from "app/context/unsaved.context"
import { Button, ButtonProps } from "./Button"

type Props = {
  children: React.ReactNode
  onPress: (e: GestureResponderEvent) => void
  textStyle?: TextStyle
} & Omit<ButtonProps, "onPress">

export const BlockButton = ({ children, onPress, textStyle, ...rest }: Props) => {
  const { unsavedChanges } = useContext(UnsavedChangesContext)
  const [openedModal, setOpenedModal] = useState(false)

  const handleModalClose = () => {
    setOpenedModal(false)
  }

  const handleModalOpen = () => {
    setOpenedModal(true)
  }

  return (
    <>
      <Button {...rest} onPress={unsavedChanges ? handleModalOpen : onPress}>
        <Text style={textStyle}>{children}</Text>
      </Button>
      <Portal>
        <Dialog visible={openedModal} onDismiss={handleModalClose}>
          <Dialog.Title>Увага!</Dialog.Title>
          <Dialog.Content>
            <Text>У вас є не збережені зміни, дані зміни будуть скасовані! Продовжити?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleModalClose}>Закрити</Button>
            <Button
              onPress={(e) => {
                onPress(e)
                handleModalClose()
              }}
            >
              Скасувати зміни
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}
