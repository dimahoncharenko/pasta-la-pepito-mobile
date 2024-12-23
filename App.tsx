import "@expo/metro-runtime"
import * as SplashScreen from "expo-splash-screen"
import React from "react"
import App from "src/app"

SplashScreen.preventAutoHideAsync()

function IgniteApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp
