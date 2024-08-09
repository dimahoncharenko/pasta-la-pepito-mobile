import { Introduction } from "app/components/Introduction"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Hero } from "./Hero"
import { Features } from "app/components/Features"
import { Map } from "app/components/Map"
import { InstaFeed } from "app/components/InstaFeed"

type Props = {
  navigateToMenu: () => void
}

const DATA = (navigateToMenu: Props["navigateToMenu"]) => [
  {
    id: 0,
    component: Hero,
  },
  {
    id: 1,
    component: Introduction.bind(null, { navigateToMenu }),
  },
  {
    id: 2,
    component: Features,
  },
  {
    id: 3,
    component: Map,
  },
  {
    id: 4,
    component: InstaFeed,
  },
]

export const Sections = ({ navigateToMenu }: Props) => {
  return (
    <SafeAreaView>
      <FlatList data={DATA(navigateToMenu)} renderItem={({ item }) => <item.component />} />
    </SafeAreaView>
  )
}
