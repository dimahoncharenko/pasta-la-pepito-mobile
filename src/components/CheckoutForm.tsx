import { useContext, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { View, ViewStyle } from "react-native"
import { UnsavedChangesContext } from "src/shared/context/unsaved.context"
import { translate } from "src/shared/i18n"
import { FilledButton } from "src/shared/ui/FilledButton"
import { colors, typography } from "src/theme"
import { BlockButton } from "./BlockButton"
import { SelectDate } from "./SelectDate"
import { SelectPaymentMethod } from "./SelectPaymentMethod"
import { SelectTime } from "./SelectTime"
import { Text } from "./Text"
import { TextField } from "./TextField"

type Props = {
  handleReturn: () => void
}

export const CheckoutForm = ({ handleReturn }: Props) => {
  const { update } = useContext(UnsavedChangesContext)

  useEffect(() => {
    // It will notify the user of unsaved changes in case of leaving
    update((values) => ({ ...values, unsavedChanges: true }))
  }, [])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      paymentMethod: "card",
      cashAmount: 0,
      withoutExchange: false,
    },
  })

  const handleSubmitForm = (data: typeof control._formValues) => {
    // Reset the state for unsaved changes
    update((values) => ({ ...values, unsavedChanges: false }))
  }

  return (
    <>
      <Text
        className="font-alegreyaSCMedium text-center text-[28px] mb-8"
        tx="screenHeaders.checkout"
      />
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text
          className="text-lg font-interMedium -mt-2 mb-4"
          tx="cartScreen.checkoutSection.contacts.title"
        />
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              labelTx="cartScreen.checkoutSection.contacts.fields.name"
              placeholderTx="cartScreen.checkoutSection.contacts.fieldsPlaceholders.name"
              accessibilityLabel={translate("cartScreen.checkoutSection.contacts.fields.name")}
              inputWrapperStyle={[errors.name && $errorInput]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              classes={{
                root: "mt-1 mx-0",
                inputWrapper: "border-0 border-b mb-6",
                label: "text-sm",
              }}
              placeholderTextColor={errors.name ? colors.error : colors.palette.gray300}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              labelTx="cartScreen.checkoutSection.contacts.fields.phone"
              placeholderTx="cartScreen.checkoutSection.contacts.fieldsPlaceholders.phone"
              accessibilityLabel={translate("cartScreen.checkoutSection.contacts.fields.phone")}
              inputWrapperStyle={[errors.phone && $errorInput]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              classes={{
                root: "mt-1 mx-0",
                inputWrapper: "border-0 border-b mb-6",
                label: "text-sm",
              }}
              placeholderTextColor={errors.phone ? colors.error : colors.palette.gray300}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              labelTx="cartScreen.checkoutSection.contacts.fields.email"
              placeholderTx="cartScreen.checkoutSection.contacts.fieldsPlaceholders.email"
              accessibilityLabel={translate("cartScreen.checkoutSection.contacts.fields.email")}
              inputWrapperStyle={[errors.email && $errorInput]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              classes={{
                root: "mt-1 mx-0",
                inputWrapper: "border-0 border-b mb-6",
                label: "text-sm",
              }}
              placeholderTextColor={errors.email ? colors.error : colors.palette.gray300}
            />
          )}
        />
      </View>
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text
          className="text-lg font-interMedium -mt-2 mb-4"
          tx="cartScreen.checkoutSection.deliveryTime.title"
        />
        <SelectDate control={control} />
        <View className="mt-6">
          <SelectTime control={control} />
        </View>
      </View>
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text
          className="text-lg font-interMedium -mt-2 mb-4"
          tx="cartScreen.checkoutSection.paymentMethods.title"
        />
        <SelectPaymentMethod control={control} />
      </View>
      <FilledButton onPress={handleSubmit(handleSubmitForm)} tx="common.orderButton" />
      <BlockButton
        onPress={() => {
          handleReturn()
          update((values) => ({ ...values, unsavedChanges: false }))
        }}
        className="rounded-enormous border border-primary p-3 mb-6"
        textClassname="text-primary text-base text-center"
        textStyle={{
          color: colors.palette.primary200,
          fontFamily: typography.fonts.inter.medium,
        }}
      >
        {translate("common.menuButton")}
      </BlockButton>
    </>
  )
}

const $errorInput: ViewStyle = {
  borderColor: colors.error,
}
