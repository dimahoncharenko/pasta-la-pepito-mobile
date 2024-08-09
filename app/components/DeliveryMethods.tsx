import { TextStyle, View, ViewStyle } from "react-native"
import { Controller, Control, FieldErrors } from "react-hook-form"

import { Tabs } from "./Tabs"
import { Text } from "./Text"
import { Separator } from "./Separator"
import { Icon } from "./Icon"
import { colors, spacing, typography } from "app/theme"
import { TextField } from "./TextField"
import { translate } from "app/i18n"

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
              <View style={$container}>
                <View style={{ display: "flex", gap: 28 }}>
                  <Text style={$formTitle}>{translate("cartScreen.deliverySection.title")}</Text>
                  <Controller
                    control={control}
                    name={"city"}
                    rules={{ required: true }}
                    render={({ field: { value, onBlur, onChange } }) => (
                      <View style={$inputWrapper}>
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
                          inputWrapperStyle={[
                            {
                              borderWidth: 0,
                              borderBottomWidth: 1,
                            },
                            errors.city && $errorInput,
                          ]}
                          style={{
                            marginHorizontal: 0,
                          }}
                          placeholderTextColor={errors.city ? colors.error : colors.palette.gray300}
                        />
                        {errors.city && (
                          <Text style={$errorText}>
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
                      <View style={$inputWrapper}>
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
                          inputWrapperStyle={[
                            {
                              borderWidth: 0,
                              borderBottomWidth: 1,
                            },
                            errors.street && $errorInput,
                          ]}
                          style={{
                            marginHorizontal: 0,
                          }}
                          placeholderTextColor={
                            errors.street ? colors.error : colors.palette.gray300
                          }
                        />
                        {errors.street && (
                          <Text style={$errorText}>
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
                      <View style={$inputWrapper}>
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
                          inputWrapperStyle={[
                            {
                              borderWidth: 0,
                              borderBottomWidth: 1,
                            },
                            errors.houseNumber && $errorInput,
                          ]}
                          style={{
                            marginHorizontal: 0,
                          }}
                          placeholderTextColor={
                            errors.houseNumber ? colors.error : colors.palette.gray300
                          }
                        />
                        {errors.houseNumber && (
                          <Text style={$errorText}>
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
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
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
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
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
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.story"
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                          borderBottomColor: colors.palette.gray400,
                        }}
                        style={{
                          marginHorizontal: 0,
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
                        placeholderTx="cartScreen.deliverySection.fieldsPlaceholders.code"
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                          borderBottomColor: colors.palette.gray400,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                    )}
                  />
                </View>
              </View>
            </Tab>
            <Tab tab={translate("cartScreen.tabs.pickup")}>
              <View style={$container}>
                <Text style={$pickupTitle} tx="cartScreen.pickupSection.title" />
                <View>
                  <Text style={$cityText}>
                    <Icon
                      icon="pin"
                      style={{ marginBottom: -4, marginRight: 6 }}
                      color={colors.palette.primary100}
                    />{" "}
                    {translate("cartScreen.pickupSection.location")}
                  </Text>
                  <Separator style={{ marginBottom: spacing.xs }} />
                  <Text tx="cartScreen.pickupSection.address" />
                </View>
              </View>
            </Tab>
          </>
        )}
      </Tabs>
    </>
  )
}

const $container: ViewStyle = {
  borderRadius: 30,
  borderWidth: 1,
  borderColor: colors.palette.primary100,
  paddingVertical: 24,
  paddingHorizontal: 10,
  marginBottom: spacing.xl,
}

const $formTitle: TextStyle = {
  fontFamily: typography.fonts.inter.medium,
  fontSize: 18,
}

const $pickupTitle: TextStyle = {
  fontFamily: typography.fonts.inter.medium,
}

const $cityText: TextStyle = {
  color: colors.palette.primary100,
  fontSize: 18,
  marginTop: 28,
}

const $inputWrapper: ViewStyle = {
  position: "relative",
}

const $errorText: TextStyle = {
  color: colors.error,
  fontSize: 12,
  position: "absolute",
  bottom: -24,
}

const $errorInput: ViewStyle = {
  borderColor: colors.error,
}
