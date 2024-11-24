import { View } from "react-native"
import { SvgFromUri } from "react-native-svg"
import { Text } from "src/components"
import { Feature } from "../models"

export const FeatureItem = ({ description, image, title }: Feature) => {
  return (
    <View className="items-center justify-center rounded-large w-[164px] h-[164px] border border-primary-light my-2 mx-4">
      <SvgFromUri className="mt-3 mb-2" uri={`${image}`} width={48} height={48} />
      <Text className="px-4 mb-[6px] text-center text-sm font-interBold leading-[16.8px]">
        {title}
      </Text>
      <Text className="px-2 mb-2 text-center text-xs opacity-70 leading-[14.4px]">
        {description}
      </Text>
    </View>
  )
}
