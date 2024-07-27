import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps"
import { StyleSheet, View } from "react-native"
import { colors } from "app/theme"

export const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
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

const styles = StyleSheet.create({
  mapContainer: {
    width: "90%",
    height: 300,
    marginLeft: "5%",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.main,
    marginVertical: 12,
  },
  map: {
    width: "100%",
    height: "100%",
  },
})
