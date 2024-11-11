import { Control, Controller, FieldErrors } from "react-hook-form"
import { View, ViewStyle } from "react-native"
import { translate } from "src/shared/i18n"
import { colors } from "src/theme"
import { Icon } from "./Icon"
import { Separator } from "./Separator"
import { Tabs } from "./Tabs"
import { Text } from "./Text"
import { TextField } from "./TextField"

type TextFields = {
  city: string
  street: string
  houseNumber: string
  entrance: string
  appartmentNumber: string
  score: string
  code: string
}

type Props = {
  control: Control<TextFields, any>
  errors: FieldErrors<TextFields>
}
export const DeliveryMethods = ({ control, errors }: Props) => {
  return (
    <>
      <Tabs tabs={["Доставка", "Самовивіз"]}>
        {(Tab) => (
          <>
            <Tab tab={translate("cartScreen.tabs.delivery")}>
              <View className="rounded-enormous border border-primary-light py-6 px-[10px] mb-8">
                <View style={{ gap: 28 }}>
                  <Text className="text-[18px] leading-[23.4px] font-interMedium">
                    {translate("cartScreen.deliverySection.title")}
                  </Text>
                  <Controller
                    control={control}
                    name={"city"}
                    rules={{ required: true }}
                    render={({ field: { value, onBlur, onChange } }) => (
                      <View className="relative">
                        <TextField
                          value={value}
                          onBlur={onBlur}
                          onFocus={() => {
                            if (errors.city) {
                              control._setErrors({ ...errors, city: undefined })
                            }
                          }}
                          onChangeText={onChange}
                          labelTx="cartScreen.deliverySection.fields.city"
                          placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.city"
                          accessibilityLabel={translate("cartScreen.deliverySection.fields.city")}
                          classes={{
                            inputWrapper: "border-0 border-b",
                            input: "mx-0",
                            label: "text-sm leading-[18.2px]",
                          }}
                          inputWrapperStyle={[errors.city && $errorInput]}
                          placeholderTextColor={errors.city ? colors.error : colors.palette.gray300}
                        />
                        {errors.city && (
                          <Text className="text-xs text-error absolute -bottom-6">
                            {translate("cartScreen.deliverySection.fieldsErrors.city")}
                          </Text>
                        )}
                      </View>
                    )}
                  />
                  <Controller
                    control={control}
                    name="street"
                    rules={{ required: true }}
                    render={({ field: { value, onBlur, onChange } }) => (
                      <View className="relative">
                        <TextField
                          value={value}
                          onBlur={onBlur}
                          onFocus={() => {
                            if (errors.street) {
                              control._setErrors({ ...errors, street: undefined })
                            }
                          }}
                          labelTx="cartScreen.deliverySection.fields.street"
                          placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.street"
                          accessibilityLabel={translate("cartScreen.deliverySection.fields.street")}
                          onChangeText={onChange}
                          classes={{
                            inputWrapper: "border-0 border-b",
                            input: "mx-0",
                            label: "text-sm leading-[18.2px]",
                          }}
                          inputWrapperStyle={[errors.street && $errorInput]}
                          placeholderTextColor={
                            errors.street ? colors.error : colors.palette.gray300
                          }
                        />
                        {errors.street && (
                          <Text className="text-xs text-error absolute -bottom-6">
                            {translate("cartScreen.deliverySection.fieldsErrors.street")}
                          </Text>
                        )}
                      </View>
                    )}
                  />
                  <Controller
                    control={control}
                    name="houseNumber"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <View className="relative">
                        <TextField
                          value={value}
                          onBlur={onBlur}
                          onChangeText={onChange}
                          onFocus={() => {
                            if (errors.houseNumber) {
                              control._setErrors({ ...errors, houseNumber: undefined })
                            }
                          }}
                          labelTx="cartScreen.deliverySection.fields.houseNumber"
                          accessibilityLabel={translate(
                            "cartScreen.deliverySection.fields.houseNumber",
                          )}
                          placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.houseNumber"
                          classes={{
                            inputWrapper: "border-0 border-b",
                            input: "mx-0",
                            label: "text-sm leading-[18.2px]",
                          }}
                          inputWrapperStyle={[errors.houseNumber && $errorInput]}
                          placeholderTextColor={
                            errors.houseNumber ? colors.error : colors.palette.gray300
                          }
                        />
                        {errors.houseNumber && (
                          <Text className="text-xs text-error absolute -bottom-6">
                            {translate("cartScreen.deliverySection.fieldsErrors.houseNumber")}
                          </Text>
                        )}
                      </View>
                    )}
                  />
                  <Controller
                    control={control}
                    name="entrance"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextField
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        labelTx="cartScreen.deliverySection.fields.entrance"
                        accessibilityLabel={translate("cartScreen.deliverySection.fields.entrance")}
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.entrance"
                        classes={{
                          inputWrapper: "border-0 border-b",
                          input: "mx-0",
                          label: "text-sm leading-[18.2px]",
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="appartmentNumber"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextField
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        labelTx="cartScreen.deliverySection.fields.apartmentNumber"
                        accessibilityLabel={translate(
                          "cartScreen.deliverySection.fields.apartmentNumber",
                        )}
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.apartmentNumber"
                        classes={{
                          inputWrapper: "border-0 border-b",
                          input: "mx-0",
                          label: "text-sm leading-[18.2px]",
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="score"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextField
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        labelTx="cartScreen.deliverySection.fields.story"
                        accessibilityLabel={translate("cartScreen.deliverySection.fields.story")}
                        LabelTextProps={{
                          className: "text-sm leading-[18.2px]",
                        }}
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.story"
                        classes={{
                          inputWrapper: "border-0 border-b",
                          input: "mx-0",
                          label: "text-sm leading-[18.2px]",
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="code"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextField
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        labelTx="cartScreen.deliverySection.fields.code"
                        accessibilityLabel={translate("cartScreen.deliverySection.fields.code")}
                        LabelTextProps={{
                          className: "text-sm leading-[18.2px]",
                        }}
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.code"
                        classes={{
                          inputWrapper: "border-0 border-b",
                          input: "mx-0",
                          label: "text-sm leading-[18.2px]",
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                    )}
                  />
                </View>
              </View>
            </Tab>
            <Tab tab={translate("cartScreen.tabs.pickup")}>
              <View className="rounded-enormous border border-primary-light py-6 px-[10px] mb-8">
                <Text className="font-interMedium text-lg" tx="cartScreen.pickupSection.title" />
                <View>
                  <Text className="text-primary-light text-base mt-7">
                    <Icon
                      icon="pin"
                      className="-mb-[6px] mr-[6px] scale-y-[1.2]"
                      color={colors.palette.primary100}
                    />{" "}
                    {translate("cartScreen.pickupSection.location")}
                  </Text>
                  <Separator className="mb-2" />
                  <Text className="text-base" tx="cartScreen.pickupSection.address" />
                </View>
              </View>
            </Tab>
          </>
        )}
      </Tabs>
    </>
  )
}

const $errorInput: ViewStyle = {
  borderColor: colors.error,
}
