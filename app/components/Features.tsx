import { Image, ImageSourcePropType, View } from "react-native"
import { Text } from "./Text"

const items: ItemProps[] = [
  {
    title: "Безкоштовна доставка",
    description: "При замовленні від 700 грн",
    iconPath: require("../../assets/images/feature-1.png"),
  },
  {
    title: "Традиційні рецепти",
    description: "Справжня італійська кухня",
    iconPath: require("../../assets/images/feature-2.png"),
  },
  {
    title: "Персоналізація страв",
    description: "Додай улюблений інгредієнт ",
    iconPath: require("../../assets/images/feature-3.png"),
  },
  {
    title: "Зручна оплата",
    description: "Безготівково або готівкою",
    iconPath: require("../../assets/images/feature-4.png"),
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
      <Text preset="heading" style={{ padding: 24, fontSize: 28 }}>
        Наші переваги
      </Text>
      <View>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </View>
    </View>
  )
}
