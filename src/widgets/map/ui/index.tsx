import { View } from "react-native"
import MapView, { MapMarker, PROVIDER_GOOGLE } from "react-native-maps"

export const Map = () => {
  return (
    <View className="w-[90%] h-[300px] ml-[5%] rounded-xl overflow-hidden border border-primary my-3">
      <MapView
        className="w-full h-full"
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 50.436500338331044,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
          longitude: 30.520359999999982,
        }}
      >
        <MapMarker
          coordinate={{
            latitude: 50.436500338331044,
            longitude: 30.520359999999982,
          }}
          title="Pasta La Pepito"
        />
      </MapView>
    </View>
  )
}
