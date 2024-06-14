import { View, Alert, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNewBook } from '../hooks';
import { Button, Input } from '../components';
import { styles } from '../styles';

export default function Books({ navigation }) {
  const { title, setTitle, author, setAuthor, year, setYear, genre, setGenre, description, setDescription, handleNewBook } = useNewBook();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />
      <Input
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        inputMode="numeric"
      />
      <Input
        placeholder="Gênero"
        value={genre}
        onChangeText={setGenre}
      />
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <Button 
        title="Adicionar Livro"
        onPress={handleNewBook}
      />
    </View>
  );
}
