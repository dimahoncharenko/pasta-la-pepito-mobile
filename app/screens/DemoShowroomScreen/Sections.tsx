import { Introduction } from "app/components/Introduction"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Hero } from "./Hero"
import { Features } from "app/components/Features"
import { Map } from "app/components/Map"
import { InstaFeed } from "app/components/InstaFeed"

const DATA = [
  {
    id: 0,
    component: Hero,
  },
  {
    id: 1,
    component: Introduction,
  },
  {
    id: 2,
    component: Features,
  },
  // {
  //   id: 3,
  //   component: Map,
  // },
  {
    id: 4,
    component: InstaFeed,
  },
]

export const Sections = () => {
  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={({ item }) => <item.component />} />
    </SafeAreaView>
  )
}
