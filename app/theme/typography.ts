import { Platform } from "react-native"
import {
  AlegreyaSC_500Medium as alegreyaSCMedium,
  AlegreyaSC_400Regular as alegreyaSCRegular,
} from "@expo-google-fonts/alegreya-sc"
import {
  Inter_300Light as interLight,
  Inter_400Regular as interRegular,
  Inter_500Medium as interMedium,
  Inter_700Bold as interBold,
} from "@expo-google-fonts/inter"

export const customFontsToLoad = {
  alegreyaSCMedium,
  alegreyaSCRegular,
  interLight,
  interRegular,
  interMedium,
  interBold,
}

const fonts = {
  inter: {
    light: "interLight",
    normal: "interRegular",
    medium: "interMedium",
    bold: "interBold",
  },
  alegreyaSC: {
    normal: "alegreyaSCRegular",
    medium: "alegreyaSCMedium",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.inter,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
