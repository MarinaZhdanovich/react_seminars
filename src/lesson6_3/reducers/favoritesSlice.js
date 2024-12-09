import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [], // Начальное состояние - пустой массив избранных товаров
  reducers: {
    addFavorite: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload.id); // Проверяем, есть ли товар уже в списке
      if (!existingProduct) {
        state.push(action.payload); // Добавляем товар, если его нет в списке
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Удаляем товар по id
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

