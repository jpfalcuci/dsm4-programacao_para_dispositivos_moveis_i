import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useBooks } from '../hooks';
import { Button } from '../components';
import { styles } from '../styles';
import { useFocusEffect } from '@react-navigation/native';

export default function Books({ navigation }) {
  const { books, getBooks, deleteBook } = useBooks();

  useFocusEffect(
    React.useCallback(() => {
      getBooks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Button 
        title="Adicionar Livro"
        onPress={ () => { navigation.navigate('NewBook') } }
      />

      <FlatList
        data={books}
        keyExtractor={ (item, index) => index.toString() }
        renderItem={ ({ item }) => (
          <View style={styles.bookContainer}>
            <Text style={styles.text}>Título: {item.title}</Text>
            <Text style={styles.text}>Autor: {item.author}</Text>
            <Text style={styles.text}>Gênero: {item.genre}</Text>
            <Text style={styles.text}>Ano: {item.year}</Text>
            <Text style={styles.text}>Descrição: {item.description}</Text>

            <Button
              title="Excluir"
              onPress={ () => { deleteBook(books.indexOf(item)) } }
            />
          </View>
        )}
      />
    </View>
  );
};
