import { useState, useCallback } from 'react';
import { Platform, PermissionsAndroid, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const useCamera = () => {
  const [filePath, setFilePath] = useState({});

  const requestPermission = async (permission, title, message) => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(permission, { title, message });
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        Alert.alert('Erro de permissão', err.message);
        return false;
      }
    }
    return true;
  };

  const requestCameraPermissions = async () => {
    const isCameraPermitted = await requestPermission(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      'Permissão da Câmera',
      'O aplicativo precisa de permissão para acessar a câmera',
    );
    const isStoragePermitted = await requestPermission(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      'Permissão de Escrita em Armazenamento Externo',
      'O aplicativo precisa de permissão para escrever em armazenamento externo',
    );

    return isCameraPermitted && isStoragePermitted;
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('O usuário cancelou a seleção');
    } else if (response.errorCode) {
      const messages = {
        'camera_unavailable': 'Câmera não disponível no dispositivo',
        'permission': 'Permissão não concedida',
        'others': response.errorMessage,
      };
      Alert.alert('Erro', messages[response.errorCode] || 'Erro desconhecido');
    } else {
      setFilePath(response);
    }
  };

  const captureImage = useCallback(async (type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };

    const permissionsGranted = await requestCameraPermissions();
    if (permissionsGranted) {
      launchCamera(options, handleResponse);
    }
  }, []);

  const chooseFile = useCallback((type) => {
    const options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, handleResponse);
  }, []);

  return { filePath, captureImage, chooseFile };
};

export default useCamera;
