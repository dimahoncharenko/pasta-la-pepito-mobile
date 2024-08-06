import { Controller, useForm } from "react-hook-form"
import { Text, View, ViewStyle } from "react-native"

import { TextField } from "./TextField"
import { colors, spacing } from "app/theme"
import { Button } from "./Button"
import { BlockButton } from "./BlockButton"
import { UnsavedChangesContext } from "app/context/unsaved.context"
import { useContext, useEffect } from "react"
import { SelectDate } from "./SelectDate"
import { SelectTime } from "./SelectTime"
import { SelectPaymentMethod } from "./SelectPaymentMethod"

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
      paymentMethod: "",
      cashAmount: 0,
      withoutExchange: false,
    },
  })

  const handleSubmitForm = (data: typeof control._formValues) => {
    console.log(data)

    // Reset the state for unsaved changes
    update((values) => ({ ...values, unsavedChanges: false }))
  }

  return (
    <>
      <Text className="font-alegreyaMedium text-center text-[28px] mb-8">Оплата замовника</Text>
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text className="text-lg font-medium -mt-2 mb-4">Контакти замовника</Text>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              label="Ім'я"
              placeholder="Ваше ім'я"
              inputWrapperStyle={[
                {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  marginBottom: 24,
                },
                errors.name && $errorInput,
              ]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              LabelTextProps={{ style: { fontSize: 14 } }}
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
              label="Телефон"
              placeholder="380XXXXXXXXX"
              inputWrapperStyle={[
                {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  marginBottom: 24,
                },
                errors.phone && $errorInput,
              ]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              LabelTextProps={{ style: { fontSize: 14 } }}
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
              label="Email"
              placeholder="Ваш email"
              inputWrapperStyle={[
                {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                errors.email && $errorInput,
              ]}
              style={{
                marginHorizontal: 0,
                marginTop: 4,
              }}
              LabelTextProps={{ style: { fontSize: 14 } }}
              placeholderTextColor={errors.email ? colors.error : colors.palette.gray300}
            />
          )}
        />
      </View>
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text className="text-lg font-medium -mt-2 mb-4">Час доставки</Text>
        <SelectDate control={control} />
        <View className="mt-6">
          <SelectTime control={control} />
        </View>
      </View>
      <View className="rounded-[20px] mb-8 border border-primary-light py-6 px-[10px]">
        <Text className="text-lg font-medium -mt-2 mb-4">Тип оплати</Text>
        <SelectPaymentMethod control={control} />
      </View>
      <Button
        style={$orderButton}
        pressedStyle={$orderButtonHover}
        onPress={handleSubmit(handleSubmitForm)}
        textStyle={{ color: "white" }}
      >
        Оформити замовлення
      </Button>
      <BlockButton
        onPress={() => {
          handleReturn()
          update((values) => ({ ...values, unsavedChanges: false }))
        }}
        style={[$returnButton]}
        textStyle={{ color: colors.palette.primary100, fontSize: 16, paddingVertical: 12 }}
      >
        Повернутись до меню
      </BlockButton>
    </>
  )
}

const $errorInput: ViewStyle = {
  borderColor: colors.error,
}

const $button: ViewStyle = {
  borderRadius: 30,
  paddingVertical: 12,
}

const $orderButton: ViewStyle = {
  ...$button,
  backgroundColor: colors.palette.primary100,
  borderWidth: 0,
}

const $orderButtonHover: ViewStyle = {
  backgroundColor: colors.palette.primary200,
}

const $returnButton: ViewStyle = {
  ...$button,
  borderWidth: 1,
  paddingVertical: 0,
  borderColor: colors.palette.primary100,
  marginVertical: spacing.xl,
}
