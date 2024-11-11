import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Features } from "src/widgets/features"
import { Hero } from "src/widgets/hero"
import { InstaFeed } from "src/widgets/insta-feed"
import { Introduction } from "src/widgets/introduction"
import { Map } from "src/widgets/map"
import { NewDishes } from "src/widgets/new-dishes"

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
    component: NewDishes,
  },
  {
    id: 3,
    component: Features,
  },
  {
    id: 4,
    component: Map,
  },
  {
    id: 5,
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
