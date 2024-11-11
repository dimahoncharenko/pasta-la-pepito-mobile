import { useEffect, useState } from "react"
import { View } from "react-native"
import { FeatureItem } from "src/entities/feature"
import { Feature } from "src/entities/feature/models/feature.types"
import { featureApi } from "src/services/api/feature/featureApi"
import { Grid } from "src/shared/ui/Grid"
import { SectionHeading } from "src/shared/ui/SectionHeading"

export const Features = () => {
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await featureApi.getFeatures()

        if (res.kind === "ok") {
          setFeatures(res.features || [])
        }
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  featureApi.getFeatures()

  return (
    <View className="items-center px-6 py-3">
      <SectionHeading tx="homeScreen.features.title" />
      <View className="mt-5">
        <Grid
          data={features}
          cols={2}
          keyExtractor={({ id }) => `${id}`}
          item={(data) => <FeatureItem key={data.index} {...data.item} />}
        />
      </View>
    </View>
  )
}
