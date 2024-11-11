import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Text } from "src/components"
import { PostItem } from "src/entities/post"
import { postApi } from "src/services/api/post/post.service"
import { Post } from "src/services/api/post/post.types"
import { translate } from "src/shared/i18n"

export const InstaFeed = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await postApi.getPosts()
      if (response.kind === "ok") {
        setPosts(response.posts)
      } else {
        console.error("Failed to fetch new dishes:", response)
      }
    })()
  }, [])

  return (
    <>
      <Text className="p-6 text-[28px] leading-[33.6px] font-interMedium tracking-wide">
        {translate("homeScreen.instagram.title")}
        <Text
          className="text-primary text-[28px] tracking-wide font-interMedium leading-[33.6px]"
          tx={"homeScreen.instagram.link"}
        />
      </Text>
      <FlatList
        className="mx-2 mb-[60px]"
        horizontal
        data={posts}
        renderItem={({ item, index }) => <PostItem key={index} {...item} />}
      />
    </>
  )
}
