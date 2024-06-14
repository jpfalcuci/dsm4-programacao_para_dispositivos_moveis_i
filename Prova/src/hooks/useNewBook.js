import { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const useNewBook = () => {
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  const [ year, setYear ] = useState('');
  const [ genre, setGenre ] = useState('');
  const [ description, setDescription ] = useState('');
  const navigation = useNavigation();

  const handleNewBook = async () => {
    if (!title || !author || !year || !genre || !description) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const newBook = {
      title: title,
      author: author,
      year: year,
      genre: genre,
      description: description,
    };

    try {
      const booksList = await AsyncStorage.getItem('books');

      if (booksList) {
        const books = JSON.parse(booksList);
        books.push(newBook);
        await AsyncStorage.setItem('books', JSON.stringify(books));
      } else {
        await AsyncStorage.setItem('books', JSON.stringify([newBook]));
      }

      navigation.navigate('Books');
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao salvar o livro\nVerifique o log');
      console.log(error);
    }
  };

  return {
    title, setTitle,
    author, setAuthor,
    year, setYear,
    genre, setGenre,
    description, setDescription,
    handleNewBook,
  };
};
