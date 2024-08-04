import { TextStyle, View, ViewStyle } from "react-native"
import { Controller, Control, FieldErrors } from "react-hook-form"

import { Tabs } from "./Tabs"
import { Text } from "./Text"
import { Separator } from "./Separator"
import { Icon } from "./Icon"
import { colors, spacing, typography } from "app/theme"
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
            <Tab tab="Доставка">
              <View style={$container}>
                <View style={{ display: "flex", gap: 28 }}>
                  <Text style={$formTitle}>Адреса доставки</Text>
                  <Controller
                    control={control}
                    name="city"
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
                          label="Місто"
                          placeholder="Введіть місто"
                          accessibilityLabel="Місто"
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
                        {errors.city && <Text style={$errorText}>Обов'язково введіть місто</Text>}
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
                          label="Вулиця"
                          placeholder="Введіть вулицю"
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
                          <Text style={$errorText}>Обов'язково введіть вулицю</Text>
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
                          label="Номер будинку"
                          placeholder="Введіть номер будинку"
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
                          <Text style={$errorText}>Обов'язково введіть номер будинку</Text>
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
                        label="Під’їзд"
                        placeholder="Введіть номер під’їзду"
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
                        label="Номер квартири"
                        placeholder="Введіть номер квартири"
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
                        label="Поверх"
                        placeholder="Введіть номер поверху"
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
                        label="Код домофону"
                        placeholder="Введіть код домофону"
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
            <Tab tab="Самовивіз">
              <View style={$container}>
                <Text style={$pickupTitle}>Адреса ресторану</Text>
                <View>
                  <Text style={$cityText}>
                    <Icon
                      icon="pin"
                      style={{ marginBottom: -4, marginRight: 6 }}
                      color={colors.palette.primary100}
                    />{" "}
                    Київ
                  </Text>
                  <Separator style={{ marginBottom: spacing.xs }} />
                  <Text>вул. Еспланадна, буд. 34/2</Text>
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
