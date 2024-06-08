import { SafeAreaView, Text, View } from 'react-native';
import { Button } from '../../components/button';
import { S } from './styles';
import useCamera from '../../hooks/useCamera';


const Camera = () => {
  const { filePath, captureImage, chooseFile } = useCamera();

  return (
    <SafeAreaView style={S.textContainer}>
      <Text style={S.titleText}>
        Exemplo de Image Picker no React Native
      </Text>
      <View style={S.container}>
        <Button title="Tirar foto" onPress={() => captureImage('photo')} />
        <Button title="Gravar vídeo" onPress={() => captureImage('video')} />
        <Button title="Galeria de imagens" onPress={() => chooseFile('photo')} />
        <Button title="Galeria de vídeos" onPress={() => chooseFile('video')} />
      </View>
    </SafeAreaView>
  );
};

export default Camera;
