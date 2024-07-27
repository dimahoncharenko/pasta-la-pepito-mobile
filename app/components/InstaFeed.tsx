import { FlatList, Image, ImageSourcePropType } from "react-native"
import { Text } from "./Text"
import { colors } from "app/theme"

const items = [
  {
    image: require("../../assets/images/dish-1.jpg"),
  },
  {
    image: require("../../assets/images/dish-2.jpg"),
  },
  {
    image: require("../../assets/images/dish-3.jpg"),
  },
]

const Item = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <Image
      style={{ height: 211, width: 211, marginHorizontal: 10, borderRadius: 24 }}
      resizeMode="cover"
      source={image}
    />
  )
}

export const InstaFeed = () => {
  return (
    <>
      <Text preset="heading" style={{ padding: 24, fontSize: 28 }}>
        Приєднуйтесь до нас в{" "}
        <Text
          preset="heading"
          style={{ color: colors.palette.primary100, fontSize: 28, lineHeight: 34 }}
        >
          Instagram
        </Text>
      </Text>
      <FlatList
        style={{ marginHorizontal: 8, marginBottom: 60 }}
        horizontal={true}
        data={items}
        renderItem={({ item, index }) => <Item key={index} image={item.image} />}
      />
    </>
  )
}
