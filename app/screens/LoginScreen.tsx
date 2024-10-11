import { Link } from "@react-navigation/native"
import * as SecureStore from "expo-secure-store"
import { observer } from "mobx-react-lite"
import React, { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { Platform, TextInput, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing, typography } from "../theme"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.

    if (Platform.OS === "web") return
    ;(async () => {
      let result = await SecureStore.getItemAsync("login-credentials")
      if (result) {
        const [email, password] = result.split("---")
        setAuthEmail(email)
        setAuthPassword(password)
      } else {
        console.log("No values stored under that key.")
      }
    })()

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  async function login() {
    setIsSubmitted(true)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.

    if (Platform.OS !== "web") {
      await SecureStore.setItemAsync("login-credentials", `${authEmail}---${authPassword}`)
    }

    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // It mocks a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Text
        testID="login-heading"
        tx="loginScreen.signIn"
        className="text-secondary-200 text-5xl"
        style={{
          marginBottom: spacing.sm,
          fontFamily: typography.fonts.alegreyaSC.medium,
        }}
      />

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        labelTx="loginScreen.emailFieldLabel"
        LabelTextProps={{ style: { color: colors.palette.gray100 } }}
        placeholderTx="loginScreen.emailFieldPlaceholder"
        inputWrapperStyle={[
          {
            borderColor: colors.palette.accent300,
            borderWidth: 3,
            paddingVertical: 6,
            paddingHorizontal: 2,
            backgroundColor: colors.palette.gray100,
            borderRadius: 8,
          },
        ]}
        helper={error}
        status={error ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        inputWrapperStyle={[
          {
            borderColor: colors.palette.accent300,
            borderWidth: 3,
            paddingVertical: 6,
            paddingHorizontal: 2,
            backgroundColor: colors.palette.gray100,
            borderRadius: 8,
          },
        ]}
        secureTextEntry={isAuthPasswordHidden}
        labelTx="loginScreen.passwordFieldLabel"
        LabelTextProps={{ style: { color: colors.palette.gray100 } }}
        placeholderTx="loginScreen.passwordFieldPlaceholder"
        onSubmitEditing={login}
        RightAccessory={PasswordRightAccessory}
      />

      <Button
        testID="login-button"
        tx="loginScreen.tapToSignIn"
        preset="reversed"
        style={{
          backgroundColor: colors.palette.primary300,
          borderRadius: 8,
          paddingVertical: 16,
          paddingHorizontal: 20,
          marginTop: 16,
        }}
        onPress={login}
      />
      <View className="flex flex-row gap-1 mt-5 justify-center">
        <Text
          className="text-sm font-interMedium text-gray-100"
          tx="loginScreen.registerLinkLabel"
        />
        <Link to="/sign-up">
          <Text
            className="text-sm font-interMedium text-orange-300"
            tx="loginScreen.registerLink"
          />
        </Link>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
  backgroundColor: colors.palette.primary200,
  display: "flex",
  justifyContent: "center",
  height: "100%",
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}
