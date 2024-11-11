import { useContext, useState } from "react"
import { GestureResponderEvent, TextStyle } from "react-native"
import { Dialog, Portal, Text } from "react-native-paper"
import { UnsavedChangesContext } from "src/shared/context/unsaved.context"
import { translate } from "src/shared/i18n"
import { colors } from "src/theme"
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
        <Dialog
          visible={openedModal}
          onDismiss={handleModalClose}
          style={{ backgroundColor: colors.palette.gray100 }}
        >
          <Dialog.Title>{translate("unsavedChangesDialog.header")}</Dialog.Title>
          <Dialog.Content>
            <Text>{translate("unsavedChangesDialog.message")}</Text>
          </Dialog.Content>
          <Dialog.Actions
            style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}
          >
            <Button onPress={handleModalClose}>
              {translate("unsavedChangesDialog.cancelButton")}
            </Button>
            <Button
              preset="filled"
              style={{
                backgroundColor: colors.palette.angry100,
                borderColor: colors.palette.angry500,
                borderWidth: 1,
              }}
              onPress={(e) => {
                onPress(e)
                handleModalClose()
              }}
            >
              {translate("unsavedChangesDialog.confirmButton")}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  )
}
