import { Image, Linking } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Post } from "src/services/api/post/post.types"

export const PostItem = ({ image, link }: Post) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <Image
        resizeMode="cover"
        className="h-[211px] w-[211px] mx-[10px] rounded-enormous"
        source={{ uri: image }}
      />
    </TouchableOpacity>
  )
}
