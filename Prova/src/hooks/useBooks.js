import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useBooks = () => {
  const [ books, setBooks ] = useState([]);

  const getBooks = async () => {
    try {
      const books = await AsyncStorage.getItem('books');
      if (books) {
        setBooks(JSON.parse(books));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (index) => {
    try {
      const booksList = await AsyncStorage.getItem('books');
      if (booksList) {
        const books = JSON.parse(booksList);
        books.splice(index, 1);
        await AsyncStorage.setItem('books', JSON.stringify(books));
        setBooks(books);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    books, getBooks, deleteBook,
  };
};
