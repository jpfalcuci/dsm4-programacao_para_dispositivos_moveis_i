import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
  const navigation = useNavigation();

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (Platform.Version < 29) {
      checkPermissionAndGetLocation();
    } else {
      requestLocationPermission();
    }
  }, []);

  const checkPermissionAndGetLocation = async () => {
    try {
      const granted = await PermissionsAndroid.check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (granted) {
        console.log('Permissão concedida, obtendo localização...');
        getLocation();
      } else {
        console.log('Permissão não concedida');
        Alert.alert('Erro!', 'Não é possível obter a localização');
      }
    } catch (err) {
      console.log(`Erro ao verificar permissão de localização: ${err}`);
      Alert.alert('Erro!', 'Erro ao verificar permissão de localização');
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]);
      if (
        granted[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED &&
        granted[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissões de localização concedidas');
        getLocation();
      } else {
        console.log('Permissões de localização negadas');
        Alert.alert('Erro!', 'Permissão de localização negada');
        navigation.goBack();
      }
    } catch (err) {
      console.log(`Erro ao solicitar permissão de localização: ${err}`);
      Alert.alert('Erro!', 'Erro ao solicitar permissão de localização');
    }
  };

  const getLocation = () => {
    console.log('Obtendo localização...');
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log('Localização obtida:', coords);
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
      },
      error => {
        console.log(`Erro ao obter localização: ${error}`);
        Alert.alert('Erro!', 'Não foi possível obter a localização');
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 5000,
        distanceFilter: 0,
        showLocationDialog: true,
      },
    );
  };

  return { latitude, longitude };
};

export default useLocation;
