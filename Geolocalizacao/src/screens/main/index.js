import { useState } from 'react';
import MapView from 'react-native-maps';
import useLocation from '../../hooks/useLocation';
import { S } from './styles';

export default function Main({ navigation }) {

  const [latitude, setLatitude] = useState(-20.5149199);
  const [longitude, setLongitude] = useState(-47.4006887);
  const { coords, errorMsg } = useLocation();

  return (
    <MapView
      showsUserLocation={true}
      showsMyLocationButton={false}
      toolbarEnabled={false}
      style={S.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.010,
        longitudeDelta: 0.010,
        ...coords
      }}
    />
  )
};
