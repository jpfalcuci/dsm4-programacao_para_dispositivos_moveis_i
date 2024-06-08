import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/button';
import { S } from './styles';


export default function Opcoes() {
  const navigation = useNavigation()

  const handleGeo = async () => { navigation.navigate('main') };
  const handleChart = async () => { navigation.navigate('grafico') }
  const handleCamera = async () => { navigation.navigate('camera') }

  return (
    <View style={S.container}>
      <Button title='Geolocalização' onPress={handleGeo}/>
      <Button title='Gráfico' onPress={handleChart}/>
      <Button title='Camera' onPress={handleCamera}/>
    </View>
  );
};
