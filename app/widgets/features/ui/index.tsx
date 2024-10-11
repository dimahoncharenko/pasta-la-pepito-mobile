import { Text } from "app/components"
import { translate } from "app/i18n"
import { Image, ImageSourcePropType, View } from "react-native"

const items: ItemProps[] = [
  {
    title: translate("homeScreen.features.delivery_title"),
    description: translate("homeScreen.features.delivery_subtitle"),
    iconPath: require("../../../../assets/images/feature-1.png"),
  },
  {
    title: translate("homeScreen.features.recipes_title"),
    description: translate("homeScreen.features.recipes_subtitle"),
    iconPath: require("../../../../assets/images/feature-2.png"),
  },
  {
    title: translate("homeScreen.features.recipes_title"),
    description: translate("homeScreen.features.recipes_subtitle"),
    iconPath: require("../../../../assets/images/feature-3.png"),
  },
  {
    title: translate("homeScreen.features.payment_title"),
    description: translate("homeScreen.features.payment_subtitle"),
    iconPath: require("../../../../assets/images/feature-4.png"),
  },
]

type ItemProps = {
  title: string
  description: string
  iconPath: ImageSourcePropType
}

const Item = ({ description, iconPath, title }: ItemProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}
    >
      <Image source={iconPath} width={68} height={62} />
      <View>
        <Text preset="formLabel">{title}</Text>
        <Text preset="default">{description}</Text>
      </View>
    </View>
  )
}

export const Features = () => {
  return (
    <View
      style={{ display: "flex", alignItems: "center", paddingHorizontal: 24, paddingVertical: 12 }}
    >
      <Text
        preset="heading"
        tx={"homeScreen.features.title"}
        style={{ padding: 24, fontSize: 28 }}
      />
      <View>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </View>
    </View>
  )
}
