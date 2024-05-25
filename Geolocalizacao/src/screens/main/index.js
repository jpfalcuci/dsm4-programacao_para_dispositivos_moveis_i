import React, { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import useLocation from '../../hooks/useLocation';
import { S } from './styles';

export default function Main() {
  const { latitude, longitude } = useLocation();

  useEffect(() => {
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }, [latitude, longitude]);

  const latitudeFatec = -20.5149199;
  const longitudeFatec = -47.4006887;

  const region = {
    latitude: latitude || latitudeFatec,
    longitude: longitude || longitudeFatec,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const markerCoordinate = {
    latitude: latitude || latitudeFatec,
    longitude: longitude || longitudeFatec,
  };

  return (
    <MapView
      style={S.map}
      region={region}
      showsUserLocation={true}
    >
      <Marker
        coordinate={markerCoordinate}
        title="Minha localização"
        description="Estou aqui"
        draggable
        pinColor="green"
      />
    </MapView>
  );
}
