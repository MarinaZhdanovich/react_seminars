import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // Подключаем редьюсер для избранных товаров
  },
});

//Создать приложение, которое позволяет пользователям добавлять товары в список "Избранное" и
// управлять этим списком (добавлять новые товары и удалять их).
// 1. Настройка Redux Store:
// a. Создайте favoritesSlice с использованием createSlice. Определите начальное состояние,
// которое будет содержать массив избранных товаров. Каждый товар должен иметь id,
// name, description, и price.
// b. Определите редьюсеры для добавления товара в избранное и удаления товара из
// избранного.
// 2. Компоненты React:
// a. Создайте компонент, который отображает список всех товаров. Для каждого товара
// предусмотрите кнопку "Добавить в избранное", которая будет добавлять товар в список
// избранных.
// b. Разработайте компонент, который отображает список товаров, добавленных в
// избранное. Для каждого товара в этом списке должна быть кнопка "Удалить из
// избранного", позволяющая удалять товар из списка.