import { ReactNode } from "react"
import { Dimensions, FlatList, FlatListProps, ListRenderItemInfo, View } from "react-native"
import { GridItem } from "./ui/GridItem"

type Props<T> = {
  cols: number
  item: (data: ListRenderItemInfo<T>) => ReactNode
} & Omit<FlatListProps<T>, "numColumns" | "renderItem">

export const Grid = <T,>({ item, cols, ...rest }: Props<T>) => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
      }}
      className="container"
    >
      <FlatList
        numColumns={cols}
        renderItem={(data) => <GridItem cols={cols}>{item(data)}</GridItem>}
        {...rest}
      />
    </View>
  )
}
