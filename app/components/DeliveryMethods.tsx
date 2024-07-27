import { TextStyle, View, ViewStyle } from "react-native"
import { Formik } from "formik"

import { Tabs } from "./Tabs"
import { Text } from "./Text"
import { Separator } from "./Separator"
import { Icon } from "./Icon"
import { colors, spacing, typography } from "app/theme"
import { TextField } from "./TextField"

export const DeliveryMethods = () => {
  return (
    <>
      <Tabs tabs={["Доставка", "Самовивіз"]}>
        {(Tab) => (
          <>
            <Tab tab="Доставка">
              <View style={$container}>
                <Formik
                  initialValues={{
                    city: "",
                    street: "",
                    houseNumber: "",
                    entrance: "",
                    appartmentNumber: "",
                    score: "",
                    code: "",
                  }}
                  onSubmit={console.log}
                >
                  {({ handleBlur, handleChange, handleSubmit, values }) => (
                    <View style={{ display: "flex", gap: 28 }}>
                      <Text style={$formTitle}>Адреса доставки</Text>
                      <TextField
                        onChangeText={handleChange("city")}
                        onBlur={handleBlur("city")}
                        value={values.city}
                        label="Місто"
                        placeholder="Введіть місто"
                        accessibilityLabel="Місто"
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                      <TextField
                        onChangeText={handleChange("street")}
                        onBlur={handleBlur("street")}
                        value={values.street}
                        label="Вулиця"
                        placeholder="Введіть вулицю"
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                      <TextField
                        onChangeText={handleChange("houseNumber")}
                        onBlur={handleBlur("houseNumber")}
                        label="Номер будинку"
                        placeholder="Введіть номер будинку"
                        value={values.houseNumber}
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                      <TextField
                        onChangeText={handleChange("entrance")}
                        onBlur={handleBlur("entrance")}
                        label="Під’їзд"
                        placeholder="Введіть номер під’їзду"
                        value={values.entrance}
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                      <TextField
                        onChangeText={handleChange("appartmentNumber")}
                        onBlur={handleBlur("appartmentNumber")}
                        label="Номер квартири"
                        placeholder="Введіть номер квартири"
                        value={values.appartmentNumber}
                        inputWrapperStyle={{
                          borderWidth: 0,
                          borderBottomWidth: 1,
                        }}
                        style={{
                          marginHorizontal: 0,
                        }}
                        placeholderTextColor={colors.palette.gray300}
                      />
                      <TextField
                        onChangeText={handleChange("score")}
                        onBlur={handleBlur("score")}
                        value={values.score}
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
                      <TextField
                        onChangeText={handleChange("code")}
                        onBlur={handleBlur("code")}
                        value={values.code}
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
                    </View>
                  )}
                </Formik>
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
