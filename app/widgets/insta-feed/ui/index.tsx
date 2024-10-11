import { Text } from "app/components"
import { translate } from "app/i18n"
import { FlatList, Image, ImageSourcePropType } from "react-native"

const items = [
  {
    image: require("../../../../assets/images/dish-1.jpg"),
  },
  {
    image: require("../../../../assets/images/dish-2.jpg"),
  },
  {
    image: require("../../../../assets/images/dish-3.jpg"),
  },
]

const Item = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <Image
      className="h-[211px] w-[211px] mx-[10px] rounded-3xl"
      resizeMode="cover"
      source={image}
    />
  )
}

export const InstaFeed = () => {
  return (
    <>
      <Text preset="heading" className="p-6 text-[28px]">
        {translate("homeScreen.instagram.title")}
        <Text
          preset="heading"
          className="text-primary-light text-[28px] leading-[34px]"
          tx={"homeScreen.instagram.link"}
        />
      </Text>
      <FlatList
        className="mx-2 mb-[60px]"
        horizontal
        data={items}
        renderItem={({ item, index }) => <Item key={index} image={item.image} />}
      />
    </>
  )
}
